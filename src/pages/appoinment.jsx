import basehair from '../assets/basic hair cut.png'
import advance from '../assets/advance haircut.jpg'
import premium from '../assets/premium1cut.jpg'
import kids from '../assets/kids cut.jpg'
function Appoinment(){
    return(
        <>
        <section className="h-auto  py-5 bg-white">
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
           {/* details of hair cut //basic */}
           <div className=' px-20 py-12 w-auto h-auto  mx-52 my-8 grid grid-cols-2 gap-y-6'>
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Basic haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹299</h2>
                <p className='text-gray-400 text-xs mt-1 '>30 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Regular office / casual style</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* advance haircut */}
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Advanced haircut </h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹399</h2>
                <p className='text-gray-400 text-xs mt-1 '>40 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Fade, layer & modern looks</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* premium */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>premium haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹499</h2>
                <p className='text-gray-400 text-xs mt-1 '>50 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Complete styling & finish</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* kids */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Kids haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹199</h2>
                <p className='text-gray-400 text-xs mt-1 '>25 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Normal and Modern for kids</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>

           </div>
        </section>

        





        {/* FACIAL AND SKIN CARE */}





        <section className="h-auto  py-5 bg-white">
            <div className="text-center">
            {/* <h1 className="font-bold text-5xl font-mono" >Book Your Appoinment</h1> */}
            <h2 className="text-4xl font-extrabold">Facial & Skincare</h2>
            <p className="text-gray-500">Choose the best facial treatment for your skin</p>
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
           {/* details of hair cut //basic */}
           <div className=' px-20 py-12 w-auto h-auto  mx-52 my-8 grid grid-cols-2 gap-y-6'>
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Basic haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹299</h2>
                <p className='text-gray-400 text-xs mt-1 '>30 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Regular office / casual style</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* advance haircut */}
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Advanced haircut </h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹399</h2>
                <p className='text-gray-400 text-xs mt-1 '>40 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Fade, layer & modern looks</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* premium */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>premium haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹499</h2>
                <p className='text-gray-400 text-xs mt-1 '>50 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Complete styling & finish</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* kids */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Kids haircut</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹199</h2>
                <p className='text-gray-400 text-xs mt-1 '>25 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Normal and Modern for kids</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>

           </div>
        </section>
        </>
    )
}
export default Appoinment