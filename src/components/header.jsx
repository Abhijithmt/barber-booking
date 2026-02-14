import logo from '../assets/org barberq.png'
import {Link} from 'react-router-dom'
function Header(){
   return(
     <div className="header-div mt-3.5 ">
         <img  className ="max-w-20 " src={logo} alt="logo" />
        <div className="nav-links">
        <a href="">Home</a>
        <a href="">about us</a>
        <a href="">services</a>
        <a href="">contact</a>
        </div>
        <div className="button-div">
        <Link to="/register">
        <button className='font-bold '>signUp</button>
        </Link>
        <Link to="/login">
        <button className='font-bold '>login</button>
        </Link>
        </div>

    </div>
   )
}
export default Header