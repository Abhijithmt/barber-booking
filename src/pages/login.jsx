import { Link } from "react-router-dom";
import backgroundimg from '../assets/background.jpg'

export default function Loginpage(){
    return(
        <section className="h-screen flex items-center justify-center p-6 bg-white bg-cover" style={{ backgroundImage: `url(${backgroundimg})` }}>
        <div className="max-w-md border-white w-full rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-white" >Login</h1>
                <p className="text-gray-300 mt-2">please enter your details to login</p>
            </div>
            <form>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-300 font-bold mb-1">Username or Email</label>
                    <input 
                    type="text"
                     placeholder="e.g abhijith_123"
                     className="border mt-1 border-gray-300 rounded-xl px-4 py-3 w-full text-white"
                     ></input>
                </div>
                    <div className="mt-2">
                    <label className=" block text-sm text-gray-300 font-bold mb-1">password</label>
                    <input 
                     type="password"
                     placeholder="password"
                     className="border mt-1 border-gray-300 rounded-xl px-4 py-3 w-full text-white"
                     ></input>
                     <Link to='/forget-password'><a className=" text-xs text-blue-500 hover:underline"href="">forget password</a></Link>
                </div>
                <button 
                type="submit"
                className="w-full text-black bg-white font-bold py-3 rounded-xl hover:bg-gray-800  shadow-lg mt-2"
                >Login</button>
            </form>
            <div className="flex mt-2.5 justify-center gap-1">
                <p className="text-white">Don't have an account?</p>
                <Link  to="/register" className="text-blue-500 hover:underline">sign up</Link>
            </div>
        </div>           
        </section>
    )
}
