import Header from "./components/header"
import Footer from "./components/footer"
import Landing from "./pages/landingpage"
import Appoinment from "./pages/appoinment"
import Loginpage from "./pages/login"
import Signup from "./pages/signup"
import {Routes,Route,useLocation}from 'react-router-dom'
import Forget from "./pages/forgetpassword"
function App() {
  const location = useLocation()


  //checking with the pathlaction by includes
   const removeheaderfooter=location.pathname === "/login" || location.pathname ==="/register" ||location.pathname==='/booking-page'  || location.pathname ==='/forget-password'



  return (
    <>
    {!removeheaderfooter &&  <Header/>}

   <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/login" element={<Loginpage/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/booking-page"element={<Appoinment/>}/>
    <Route path="/forget-password" element={<Forget/>}/>

   </Routes>
   {!removeheaderfooter &&<Footer/>}
   
   
  
   </>


  )
}

export default App
