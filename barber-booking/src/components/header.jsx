import logo from '../assets/org barberq.png'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
function Header(){
    const token = localStorage.getItem('token') && localStorage.getItem('token') !== "undefined";
    const userName =localStorage.getItem("userName")
   return(
     <div className="flex justify-between items-center px-10 py-1.5 mt-3.5 sticky top-0 z-50 bg-white w-full">
         <img  className ="max-w-20 " src={logo} alt="logo" />
        <div className="flex gap-6 text-amber-950">
        <Link to ="/">Home</Link>
        <HashLink smooth to="/#about">About Us</HashLink>
        <HashLink smooth to="/#services">service</HashLink>
        <Link to='/contact'>contact</Link>
        </div>
        {token ? (<div className="flex items-center gap-3">
       <span className="font-bold text-amber-950">Hi, {userName}</span>
       <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
          {userName ? userName[0].toUpperCase() : "U"}
       </div>
    </div>):(<div className="flex gap-5">
        <Link to="/register">
        <button className='font-bold bg-amber-950 text-amber-50 py-2 px-6 rounded-xs '>signUp</button>
        </Link>
        <Link to="/login">
        <button className='font-bold bg-amber-950 text-amber-50 py-2 px-6 rounded-xs'>login</button>
        </Link>
        </div>)}
        

    </div>
   )
}
export default Header