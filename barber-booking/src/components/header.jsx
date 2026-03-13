import logo from '../assets/org barberq.png'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import { useState } from 'react';
import {UserCircle} from 'lucide-react'
import { useEffect } from 'react';
function Header(){
  const [userEmail, setUserEmail] = useState(null);
  const [drop,setDrop]=useState(false)

  useEffect(() => {
    // Check if token and username exist in localStorage
    const token = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");

    if (token && storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clears token and userName
    window.location.reload(); // Refreshes to show Login buttons again
  };


   return(
     <div className="flex justify-between items-center px-10 py-1.5 mt-3.5 sticky top-0 z-50 bg-white w-full">
         <img  className ="max-w-20 " src={logo} alt="logo" />
        <div className="flex gap-6 text-amber-950">
        <Link to ="/">Home</Link>
        <HashLink smooth to="/#about">About Us</HashLink>
        <HashLink smooth to="/#services">service</HashLink>
        <Link to='/contact'>contact</Link>
        </div>


        {userEmail ?(
            <div className="flex items-center gap-3">
            <span className=" text-black font-bold">{userEmail.split('@')[0].toUpperCase()}</span>
            <UserCircle size={32} className="cursor-pointer " 
            onClick={()=> setDrop(!drop)}/>
            

            {drop && (
              <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                                <button 
                                    onClick={handleLogout} 
                                    className="block w-full text-left px-4 py-1 text-sm text-red-500 hover:bg-gray-100"
                                >
                                    Logout
                                </button>
                            </div>
            )}
            
          </div>
        ):(<div className="flex gap-5">
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