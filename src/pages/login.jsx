
export default function Loginpage(){
    return(
        <section className="h-screen flex items-center justify-center p-6 bg-white">
        <div className="max-w-md border w-full rounded-2xl p-8 shadow-2xl">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold">Login</h1>
                <p className="text-gray-500 mt-2">please enter your details to login</p>
            </div>
            <form>
                <div className="mt-2">
                    <label className=" block text-sm text-gray-700 font-bold mb-1">Username or Email</label>
                    <input 
                     type="text"
                     placeholder="e.g abhijith_123"
                     className="border mt-1 border-gray-700 rounded-xl px-4 py-3 w-full"
                     ></input>
                </div>
                    <div className="mt-2">
                    <label className=" block text-sm text-gray-700 font-bold mb-1">password</label>
                    <input 
                     type="password"
                     placeholder="password"
                     className="border mt-1 border-gray-700 rounded-xl px-4 py-3 w-full"
                     ></input>
                     <a className=" text-xs text-blue-500 hover:underline"href="">forget password</a>
                </div>
                <button 
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-gray-800  shadow-lg mt-2"
                >Login</button>
            </form>
            <div className="flex mt-2.5 justify-center gap-1">
                <p>Don't have an account?</p>
                <a href="#" className="text-blue-500 hover:underline">sign up</a>
            </div>
        </div>           
        </section>
    )
}
