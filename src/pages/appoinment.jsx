import basehair from '../assets/basic hair cut.png'
import advance from '../assets/advance haircut.jpg'
import premium from '../assets/premium1cut.jpg'
import kids from '../assets/kids cut.jpg'
function Appoinment(){
    return(
        <section className="h-screen  py-5 bg-white">
            <div className="text-center">
            <h1 className="font-bold text-5xl font-mono" >Book Your Appoinment</h1>
            <h2 className="text-4xl font-extrabold">Haircut</h2>
            <p className="text-gray-500">Select your preferred haircut and confirm your booking</p>
           </div>
          {/* hair cut images */}
           <div className='border border-gray-200 rounded-xl px-4 py-12 w-auto h-80 shadow-sm mx-52 my-8 flex justify-between'>
            <div className="flex flex-col items-center ">
            <img  className="rounded-2xl w-[180px] h-[220px] object-cover"src={basehair} alt='hair1'></img>
            <p className=' mt-4 font-extrabold'>basic haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className='rounded-2xl w-[180px] h-[220px] object-cover' src={advance} alt='hair2'></img>
            <p className='mt-4 font-extrabold'>Advance haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className="rounded-2xl w-[180px] h-[220px] object-cover"src={premium} alt="hair3" ></img>
            <p className='mt-4 font-extrabold'>premium haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img  className="rounded-2xl w-[180px] h-[183px] object-cover"src={kids} alt="hair4"></img> 
            <p className='mt-4 font-extrabold'>kids haircut</p>
            </div>
           </div>
        </section>
    )
}
export default Appoinment