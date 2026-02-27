import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
export default function Signup(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
     const navigate=useNavigate()


    const signuphandle= async (e) => {
        e.preventDefault()
        try {
            
            const response = await axios.post('http://localhost:5000/auth/register',{name,email,password})
            alert(response.data.message)
            navigate('/login')
        } catch (error) {
            setError(error.response.data.message)
            
        }

    }





    return(
    <section className="h-screen flex items-center justify-center bg-white">
        <div className="max-w-md border w-full rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
            <h1 className="text-4xl font-extrabold">Create your account</h1>
            <p className="text-gray-500 mt-1.5">Welcome!Please fill in the details to get started </p>
            </div>
            {/* error showing */}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        
        <form onSubmit={signuphandle}>
            <div className="mt-1.5">
                <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                <input
                type="text"
                placeholder="e.g abhijith" 
                className="px-4 py-3 border mt-1 rounded-xl w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            
            </div>
            <div className="mt-1.5">
                <label className="text-sm font-bold text-gray-700 mb-1">Email address</label>
                <input 
                type="email"
                placeholder="Enter your email address" 
                className="border px-4 py-3 w-full rounded-xl "
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                
                />
            </div>
            <div className="mt-1.5">
                <label className="text-sm text-gray-700 font-bold">Password</label>
                <input type="password"
                placeholder="Enter your password" 
                className="px-4 py-3 w-full rounded-xl border"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                
                />

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