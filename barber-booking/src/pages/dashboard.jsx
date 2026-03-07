import { ArrowRight  } from "lucide-react"
import { Link } from "react-router-dom"

export default function Dashboard(){
    return(
        <div className="bg-black px-6 py-10">
        <div >
            <h1 className="text-4xl text-blue-600 font-bold">Welcome! to BarberQ</h1>
            </div>
            <div className=" py-2">
            <p className="text-gray-600 font-bold ">You have no booking now yet! </p>
             </div>
            <div className="py-2.5">
  <Link to='/booking-page'><button className="bg-blue-600 text-amber-50 flex items-center gap-2 px-4 py-2 font-bold transition-all active:scale-95 rounded-2xl cursor-pointer">
    BOOK APPOINMENT
    <ArrowRight size={18}  strokeWidth={3}/>
  </button></Link>
</div>
       
        </div>
    )
}