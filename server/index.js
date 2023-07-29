const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')
const add=express()
add.use(cors())
add.use(bodyparser.json())
add.use(express.json())
add.use(bodyparser.urlencoded({extended:true}))
add.use(express.static('public'))

let con=mysql.createConnection({
    host:"localhost",
    port:"3306",
    user:"root",
    password:"root12345",
    database:"serviceproject"
})
con.connect(function(error){
    if(error){
        console.log(error)
    }else{
        console.log("Database is success full connect")
    }
})
//insert base Details register
add.post('/insertdata',(request,response)=>{
    let {role,mobile,email,name,location,password}=request.body
    let sql='insert into register(role,mobile,email,name,location,password,username)values(?,?,?,?,?,?,?)';
    //in here assigned the username as the email
    con.query(sql,[role,mobile,email,name,location,password,email],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//Login page username and password Checking 
add.post('/login',(request,response)=>{
    let {username,password}=request.body;
    let sql ='select * from register where username=?';
    con.query(sql,[username],(error,result)=>{
        if(error){
            var a={"status":"error"}
            response.send(a)
        }
        else if(result.length>0){
            //password checking
            let username1 =result[0].username;
            let password1=result[0].password;
            let role= result[0].role ;
            let userid =result[0].userid;
            if (username1===username && password1==password ){
                let s={"status":"success","userid":userid,"role":role};
                response.send(s);
                }else{
                    let s={
                        "status":'Invalid_data'
                    };
                    response.send(s);
                }
                }
            else{
                let s={"status":"Invalied"}
                response.send(s)
            }
            })
        }
        
    )
//geting the user data for displaying the there page
add.get('/getdata/:userid',(request,response)=>{
    let{userid}=request.params
    let sql='select * from register where userid=?';
    con.query(sql,[userid],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//updating the basic users data in register table can update 
//update register
add.put('/updatedata/:userid',(request,response)=>{
    let {userid} = request.params;   // get the id of record to be updated
    let {mobile,email,name,location,password}=request.body
    let sql='update register set mobile=?,email=?,name=?,location=?,password=?,username=? where userid=?'
    con.query(sql,[mobile,email,name,location,password,email,userid],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"};
                response.send(a);
    }
    })
})
//insert servies vender useing userid
add.post('/insertdataserv/:userid',(request,response)=>{
    let {userid} = request.params;
    let {service,experenice,charge,aboutven,worklink}=request.body
    let sql='insert into service(service,experenice,charge,aboutven,worklink,userid)values(?,?,?,?,?,?)';
    con.query(sql,[service,experenice,charge,aboutven,worklink,userid],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//get servies vender userid
add.get('/getdataservice/:userid',(request,response)=>{
    let{userid}=request.params
    let sql='select * from  service where userid=?';
    con.query(sql,[userid],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})


//get the data for updateing propose there services in service table
add.get('/getdataupadte/:service_id',(request,response)=>{
    let{service_id}=request.params
    let sql='select * from  service where service_id=?';
    con.query(sql,[service_id],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//update services 
add.put('/updatedataserv/:service_id',(request,response)=>{
    let {userid,service_id} = request.params;   // get the id of record to be updated
    let {experenice,charge,aboutven,worklink}=request.body
    let sql='update service set experenice=?,charge=?,aboutven=?,worklink=? where service_id=?'
    con.query(sql,[experenice,charge,aboutven,worklink,service_id],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//delete Services in there service table
add.post('/deleteservice',(request,response)=>{
    let {service_id}=request.body
    let sql='delete from service where service_id=?';
    con.query(sql,[service_id],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
//customer
//get servies there i use sql join the two table 
add.get('/services',(request,response)=>{
    let sql='select register.mobile,name,location,service.userid,service_id,service,experenice,charge,aboutven,worklink from register right join service on register.userid=service.userid';
    con.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//get customer in register for  customer
add.get('/getcustemer',(request,response)=>{
    let role='Customer'
    let sql='select * from  register where role=?';
    con.query(sql,[role],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//get venders in register for  admin 
add.get('/getvender',(request,response)=>{
    let userid= request.params['userid'];
    let role='Vender'
    let sql='select * from  register where role=?';
    con.query(sql,[role],(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})
//delete users for admin
add.post('/deletevender',(request,response)=>{
    let {userid}=request.body
    let sql='delete from register where userid=?';
    con.query(sql,[userid],(error,result)=>{
    if(error){
        var a={"status":"error"}
        response.send(a)
    }
    else{
        var a={"status":"success"}
        response.send(a)
    }
    })
})
add.listen(3005,()=>{
    console.log("port is running in 3005")
})
