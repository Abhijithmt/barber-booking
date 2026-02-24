
export default function Forget(){

    return(
        <section className="h-screen flex items-center justify-center">
            <div className=" rounded-xl px-5 py-3 ">
                <div>
                    <h1 className="text-4xl font-extrabold ">Find Your Account</h1>
                    <p className="text-gray-500 font-bold mt-3">Enter your email to reset your password.</p>
                </div>
                <form>
                    <input className="px-2.5 py-1.5 border mt-12 w-full rounded-xs" type="email" placeholder="Enter your email" />
                </form>
                <div className="flex justify-center">
                <button className="border px-5 py-2 bg-blue-500 text-white mt-7 w-full cursor-pointer">Next</button>
                </div>

            </div>

        </section>

        
    )
}