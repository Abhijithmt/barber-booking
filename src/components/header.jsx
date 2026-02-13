import logo from '../assets/org barberq.png'
function Header(){
   return(
     <div className="header-div mt-3.5">
         <img  className ="max-w-20 " src={logo} alt="logo" />
        <div className="nav-links">
        <a href="">Home</a>
        <a href="">about us</a>
        <a href="">services</a>
        <a href="">contact</a>
        </div>
        <div className="button-div">
        <button className='font-bold '>signUp</button>
        <button className='font-bold '>login</button>
        </div>

    </div>
   )
}
export default Header