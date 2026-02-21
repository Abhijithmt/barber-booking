import logo from '../assets/org barberq.png'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
function Header(){
   return(
     <div className="header-div mt-3.5 sticky top-0 z-50 bg-white w-full">
         <img  className ="max-w-20 " src={logo} alt="logo" />
        <div className="nav-links">
        <Link to ="/">Home</Link>
        <HashLink smooth to="/#about">About Us</HashLink>
        <HashLink smooth to="/#services">service</HashLink>
        <Link to='/contact'>contact</Link>
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