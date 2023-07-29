import'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Menu } from './components/menubar/menu'
import {  Reg } from './components/Register/Register';
import { Login } from './components/login/login';
import { User } from './components/customer/customer';
import { Admin } from './components/admin/admin';
import { Vender } from './components/vender/vender';
import { Addservender} from './components/venderaddservice/addservice';
import { Updatedetails } from './components/Regupdate/updatedetails';
import { Updateservender } from './components/update_addservices/updateservice';
import { Adminvender } from './components/admin/adminvenders';
import { Admincustmers } from './components/admin/admincustomer';
import { Contactus } from './components/contactus/contactus';
import { Aboutus } from './components/aboutus/aboutus';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/'element={[<Menu/>,<Login/>]}/>
    <Route path='/login'element={[<Menu/>,<Login/>]}/>
    <Route path='/Reg'element={[<Reg/>]}/>
    <Route path='/user/:userid'element={[<User/>]}/>
    <Route path='/admin'element={[<Admin/>]}/>
    <Route path='/adminvender'element={[<Adminvender/>]}/>
    <Route path='/admincustmers'element={[<Admincustmers/>]}/>
    <Route path='/vender/:userid'element={[<Vender/>]}/>
    <Route path='/addservice/:userid'element={[<Addservender/>]}/>
    <Route path='/updateservice/:userid/:service_id'element={[<Updateservender/>]}/>
    <Route path='/updatedetails/:userid'element={[<Updatedetails/>]}/>
    <Route path='/contactus'element={[<Menu/>,<Contactus/>]}/>
    <Route path='/aboutus'element={[<Menu/>,<Aboutus/>]}/>
    Addservice

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
