import { Link } from "react-router-dom";

export default function Signup(){
    return(
    <section className="h-screen flex items-center justify-center bg-white">
        <div className="max-w-md border w-full rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold">Create your account</h1>
            <p className="text-gray-500 mt-1.5">Welcome!Please fill in the details to get started </p>
            </div>
        
        <form>
            <div className="mt-1.5">
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input
                type="text"
                placeholder="e.g abhijith" 
                className="px-4 py-3 border mt-1 rounded-xl w-full"/>
            </div>
            <div className="mt-1.5">
                <label className="text-sm font-bold text-gray-700 mb-1">Email address</label>
                <input 
                type="email"
                placeholder="Enter your email address" 
                className="border px-4 py-3 w-full rounded-xl "/>
            </div>
            <div className="mt-1.5">
                <label className="text-sm text-gray-700 font-bold">Password</label>
                <input type="password"
                placeholder="Enter your password" 
                className="px-4 py-3 w-full rounded-xl border"/>

            </div>
            <button className="border px-4 py-3 w-full bg-black text-white hover:bg-gray-800 text-center rounded-xl mt-5">Sign up</button>
        </form>
        <div className="mt-10">
            <hr></hr>
            </div>
            <div className="flex mt-6 justify-center gap-1.5  ">
            <p>Already have an account?</p>
            <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
        </div>
        </div>
    

    </section>
    )
}