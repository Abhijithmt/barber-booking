import basehair from '../assets/basic hair cut.png'
import advance from '../assets/advance haircut.jpg'
import premium from '../assets/premium1cut.jpg'
import kids from '../assets/kids cut.jpg'
import facial1 from '../assets/facial1.jpg'
import facial2 from '../assets/facial2.jpg'
import facial3 from '../assets/facial3.jpeg'
import facial4 from '../assets/facial4.jpeg'
import beard1 from '../assets/beard1.jpeg'
import beard2 from '../assets/beard2.jpg'
import beard3 from '../assets/beard3.jpg'
import beard4 from '../assets/beard4.JPG'
import straighting from '../assets/services4.jpeg'
import curling from '../assets/curling.jpg'
import coloring from '../assets/onecolor.jpg'
import globalcolor from '../assets/global color.jpg'
import barber1 from '../assets/barber1.jpeg'
import barber2 from '../assets/barber2.jpeg'
import barber3 from '../assets/barberpoto.jpg'
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
            <p className=' mt-4 font-extrabold'>Basic haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className='rounded-2xl w-[180px] h-[220px] object-cover' src={advance} alt='hair2'></img>
            <p className='mt-4 font-extrabold'>Advance haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className="rounded-2xl w-[180px] h-[220px] object-cover"src={premium} alt="hair3" ></img>
            <p className='mt-4 font-extrabold'>Premium haircut</p>
            </div>
            <div className='flex flex-col items-center'>
            <img  className="rounded-2xl w-[180px] h-[183px] object-cover"src={kids} alt="hair4"></img> 
            <p className='mt-4 font-extrabold'>Kids haircut</p>
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
          {/* facial images */}
           <div className='border border-gray-200 rounded-xl px-4 py-12 w-auto h-80 shadow-sm mx-52 my-8 flex justify-between'>
            <div className="flex flex-col items-center ">
            <img  className="rounded-2xl w-[180px] h-[220px] object-cover"src={facial1} alt='hair1'></img>
            <p className=' mt-4 font-extrabold'>Basic facial</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className='rounded-2xl w-[180px] h-[220px] object-cover' src={facial2} alt='hair2'></img>
            <p className='mt-4 font-extrabold'>Advance facial</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className="rounded-2xl w-[180px] h-[220px] object-cover"src={facial3} alt="hair3" ></img>
            <p className='mt-4 font-extrabold'>Premium facial</p>
            </div>
            <div className='flex flex-col items-center'>
            <img  className="rounded-2xl w-[180px] h-[183px] object-cover"src={facial4} alt="hair4"></img> 
            <p className='mt-4 font-extrabold'>skincare facial</p>
            </div>
           </div>
           {/* details of basic facial */}
           <div className=' px-20 py-12 w-auto h-auto  mx-52 my-8 grid grid-cols-2 gap-y-6'>
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Basic facial</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹499</h2>
                <p className='text-gray-400 text-xs mt-1 '>30 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Normal skin cleaning & refreshing</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* advance facial */}
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Advanced facial</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹699</h2>
                <p className='text-gray-400 text-xs mt-1 '>45 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Deep cleaning & glow treatment</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* premium */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>premium  facial</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹999</h2>
                <p className='text-gray-400 text-xs mt-1 '>60 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Complete skin care with massage & mask</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* kids */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>skincare faical</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹899</h2>
                <p className='text-gray-400 text-xs mt-1 '>50 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Treatment for acne & oily skin</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>

           </div>
        </section>









        {/* beard grooming */}






        <section className="h-auto  py-5 bg-white">
            <div className="text-center">
            <h2 className="text-4xl font-extrabold">Beard Grooming</h2>
            <p className="text-gray-500">Choose the best beard care service for a sharp and confident look</p>
           </div>
          {/* facial images */}
           <div className='border border-gray-200 rounded-xl px-4 py-12 w-auto h-80 shadow-sm mx-52 my-8 flex justify-between'>
            <div className="flex flex-col items-center ">
            <img  className="rounded-2xl w-[180px] h-[220px] object-cover"src={beard1} alt='hair1'></img>
            <p className=' mt-4 font-extrabold'>Basic beard trim</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className='rounded-2xl w-[180px] h-[220px] object-cover' src={beard2} alt='hair2'></img>
            <p className='mt-4 font-extrabold'>Beard Styling</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className="rounded-2xl w-[180px] h-[220px] object-cover"src={beard3} alt="hair3" ></img>
            <p className='mt-4 font-extrabold'>Beard+Moustache</p>
            </div>
            <div className='flex flex-col items-center'>
            <img  className="rounded-2xl w-[180px] h-[183px] object-cover"src={beard4} alt="hair4"></img> 
            <p className='mt-4 font-extrabold'>Beard spa/care</p>
            </div>
           </div>
           {/* details of basic beard trim */}
           <div className=' px-20 py-12 w-auto h-auto  mx-52 my-8 grid grid-cols-2 gap-y-6'>
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Basic beard trim</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹199</h2>
                <p className='text-gray-400 text-xs mt-1 '>15 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Clean trim and basic shape</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* beard styling  */}
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Beard styling</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹249</h2>
                <p className='text-gray-400 text-xs mt-1 '>20 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Detailed shaping & sharp lineup</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* beard+moustache */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Beard+Moustache</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹299</h2>
                <p className='text-gray-400 text-xs mt-1 '>25 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Complete beard & moustache grooming</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* beard spa*/}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Beard spa/care</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹399</h2>
                <p className='text-gray-400 text-xs mt-1 '>35 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Beard wash, oil & nourishment</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>

           </div>
        </section>






        {/* hair styling */}






        

        <section className="h-auto  py-5 bg-white">
            <div className="text-center">
            <h2 className="text-4xl font-extrabold">Hair styling</h2>
            <p className="text-gray-500">Choose the best hair design to match your style and occasion</p>
           </div>
          {/* hairstyling images */}


           <div className='border border-gray-200 rounded-xl px-4 py-12 w-auto h-80 shadow-sm mx-52 my-8 flex justify-between'>
            <div className="flex flex-col items-center ">
            <img  className="rounded-2xl w-[180px] h-[220px] object-cover"src={straighting} alt='hair1'></img>
            <p className=' mt-4 font-extrabold'>Straightening</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className='rounded-2xl w-[180px] h-[220px] object-cover' src={curling} alt='hair2'></img>
            <p className='mt-4 font-extrabold'>Hair curl</p>
            </div>
            <div className='flex flex-col items-center'>
            <img className="rounded-2xl w-[180px] h-[220px] object-cover"src={coloring} alt="hair3" ></img>
            <p className='mt-4 font-extrabold'>Hair color</p>
            </div>
            <div className='flex flex-col items-center'>
            <img  className="rounded-2xl w-[180px] h-[183px] object-cover"src={globalcolor} alt="hair4"></img> 
            <p className='mt-4 font-extrabold'>premium hair color</p>
            </div>
           </div>
           {/* details of Straightening */}
           <div className=' px-20 py-12 w-auto h-auto  mx-52 my-8 grid grid-cols-2 gap-y-6'>
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Straightening</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹1499</h2>
                <p className='text-gray-400 text-xs mt-1 '>90 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Temporary hair straightening for a smooth look</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* curling styling  */}
            <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Hair curl</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹1249</h2>
                <p className='text-gray-400 text-xs mt-1 '>75 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Temporary curls for parties & special events</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* beard+moustache */}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Hair color</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹999</h2>
                <p className='text-gray-400 text-xs mt-1 '>60 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Single color application for the whole hair</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>
            {/* beard spa*/}
             <div className='rounded-2xl border px-2.5 py-2.5 shadow-sm w-2xs h-auto'>
                <h3 className='font-extrabold'>Premium hair color</h3>
                <div className='flex text-center gap-2.5'>
                <h2 className='font-extrabold  text-blue-500 '>₹1799</h2>
                <p className='text-gray-400 text-xs mt-1 '>120 min</p>
                </div>
                <p className='text-gray-400 text-xs font-sans font-bold'>Global color or highlights with premium finish</p>
                <div className='flex justify-center mt-3.5 '>
                <button className='bg-black text-white px-16 py-1 rounded-2xl text-center hover:bg-blue-600 font-sans font-medium'>select</button>
                </div>

            </div>

           </div>
        </section>
       
        <section className='m-5'>
  <div className='border border-gray-200 rounded-xl px-10 py-12 w-auto h-auto shadow-sm mx-52 my-8 '>
    <h1 className='text-center text-3xl font-extrabold mb-8'>Choose Barber</h1>
    
    {/* Grid Container for Barbers */}
    <div className='flex justify-between gap-6'>
      
      {/* Barber 1 */}
      <div className='flex flex-col items-center gap-10'>
        <img className="rounded-2xl w-[180px] h-[183px] object-cover" src={barber1} alt="Barber 1" />
        <p className="font-extrabold text-blue-500">Jack</p>
        <button className='bg-black text-white px-10 py-2 rounded-2xl hover:bg-blue-600 transition-colors font-sans font-medium w-full'>
          Select
        </button>
      </div>

      {/* Barber 2 */}
      <div className='flex flex-col items-center gap-10'>
        <img className="rounded-2xl w-[180px] h-[183px] object-cover" src={barber2} alt="Barber 2" />
        <p className="font-extrabold text-blue-500">Thomas</p>
        <button className='bg-black text-white px-10 py-2 rounded-2xl hover:bg-blue-600 transition-colors font-sans font-medium w-full'>
          Select
        </button>
      </div>

      {/* Barber 3 */}
      <div className='flex flex-col items-center gap-10'>
        <img className="rounded-2xl w-[180px] h-[183px] object-cover" src={barber3} alt="Barber 3" />
        <p className="font-extrabold text-blue-500">Edward</p>
        <button className='bg-black text-white px-10 py-2 rounded-2xl hover:bg-blue-600 transition-colors font-sans font-medium w-full'>
          Select
        </button>
      </div>

    </div>
  </div>
</section>
        </>
    )
}
export default Appoinment