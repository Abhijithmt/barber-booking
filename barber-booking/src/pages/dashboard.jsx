import { ArrowRight  } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard(){
    return(
        <div className="bg-black px-6 py-10">
        <div className="flex justify-center">
            <h1 className="text-4xl text-blue-600 font-bold">Welcome! to BarberQ</h1>
            </div>
            <div className="flex justify-center py-6">
            <p className="text-white text-2xl ">You have no booking now yet! </p>
             </div>
            <div className="flex justify-center">
  <Link to='/booking-page'><button className="bg-amber-50 text-black flex items-center gap-2 px-4 py-2 font-extrabold rounded-2xl cursor-pointer">
    BOOK NOW
    <ArrowRight size={18}  strokeWidth={3}/>
  </button></Link>
</div>
       
        </div>
    )
}