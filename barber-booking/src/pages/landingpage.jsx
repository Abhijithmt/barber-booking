import image from '../assets/biglogo.png'
import service1 from '../assets/service1.jpeg'
import service2 from '../assets/service2.jpeg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/services4.jpeg'
import service5 from '../assets/service5.jpeg'
import service6 from '../assets/service6.jpeg'
import barber1 from '../assets/barberpoto.jpg'
import barber2 from '../assets/barber1.jpeg'
import barber3 from '../assets/barber2.jpeg'
import {useNavigate} from 'react-router-dom'
function Landing(){
    const navigate = useNavigate()
    const Isloggin=(false)

    const checkcondition=()=>{
        if(Isloggin){
            navigate('/booking-page')
        }else{
            navigate('/login')
        }
    }
    return(
        <>
        <section className="font-extrabold text-2xl flex justify-between text-center min-h-24">
            <div className="tittle-div mt-10">
            <h1 className='text-6xl text-amber-950'>LOOK GOOD,
                <br></br>
                FEEL CONFIDENT,
                <br></br>
                BOOK YOUR FAVORITE BARBER AND STYLE</h1>
                
                <button className='py-2.5 px-4 text-3xl bg-amber-950 text-amber-50 rounded-xl mt-8'
                 onClick={checkcondition}>BOOK NOW<span> &gt;</span></button>
                </div>
                <div className="logo-div">
                    <img  className ="w-full h-auto max-w-2xl p-5"src={image} alt="" />
                </div>
        </section>
        <section id='about' className='py-1.5 px-5 h-auto'>
            <div className='flex justify-center text-5xl font-mono text-amber-900'>
                <h1>About Us</h1>
            </div>
            <div className='py-8 px-12 '>
                <p className='text-xl '>BARBERQ is a modern grooming platform where personalized style meets professional precision.
                We connect customers with skilled professionals who understand individuality, precision, and confidence. Every service is designed to help you look sharp, feel comfortable, and express your unique style with ease.
                Grooming is more than a service — it’s an experience. Our platform brings together experienced barbers and customers in a space where quality, hygiene, and attention to detail come first. From classic cuts to modern styles, we focus on delivering results that reflect your personality and lifestyle.
                BARBERQ was created to simplify grooming. We provide a reliable platform where customers can discover trusted barbers, book services effortlessly, and enjoy consistent quality. By combining modern technology with skilled craftsmanship, we make professional grooming accessible and stress-free.
                BARBERQ is designed for people who value confidence and comfort. We believe everyone deserves a style that fits them perfectly, and our goal is to make grooming easy, reliable, and personal. With a focus on quality service and customer satisfaction, we help you look your best every day.
                its not only styling a person ,the perfect styling give the person confident,personality,
                Mainly our platform notfocus only on just barbers,we are offering the best preffesional barbers and beauticians .
                </p>
            </div>
            

        </section>
        <section id='services' className='px-5 py-5 h-auto'>
            <div className='flex justify-center'>
                <h1 className=' text-5xl text-amber-950'>Our Services</h1>
            </div>
            <div className=' grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-20 w-full max-w-7xl mx-auto'>
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service1} alt="" />
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service2} alt="" />
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service3} alt="" />
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service4} alt="" />
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service5} alt="" />
                <img className='w-full aspect-square object-cover rounded-2xl shadow-sm hover:shadow-lg transition-shadow' src={service6} alt="" />
            </div>

        </section>
       <section className="min-h-screen p-5 text-center">
  {/* Fluid Title: Uses text-4xl on mobile and text-5xl on desktop */}
  <h1 className="text-4xl md:text-5xl font-mono text-[#873232] text-center mb-10">
    Meet our professionals
  </h1>

  {/* Fluid Container: Uses a responsive grid instead of fixed flex gap */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 py-12 max-w-6xl mx-auto">
    
    {/* Card Component */}
    <div className="flex flex-col items-center text-center border border-[#575656a3] p-2 rounded-xl shadow-[10px_10px_10px_rgba(86,86,86,0.479)] bg-white transition-transform hover:scale-105">
      <img 
        className="w-full aspect-square object-cover rounded-lg" 
        src={barber1} 
        alt="Edward" 
      />
      <div className="py-4">
        <h2 className="font-mono text-[#883232ed] text-2xl font-bold">EDWARD</h2>
        <p className="font-mono text-gray-500">professional in haircut</p>
      </div>
    </div>

    {/* Repeat for Jack */}
    <div className="flex flex-col items-center text-center border border-[#575656a3] p-2 rounded-xl shadow-[10px_10px_10px_rgba(86,86,86,0.479)] bg-white transition-transform hover:scale-105">
      <img 
        className="w-full aspect-square object-cover rounded-lg" 
        src={barber2} 
        alt="Jack" 
      />
      <div className="py-4">
        <h2 className="font-mono text-[#883232ed] text-2xl font-bold">JACK</h2>
        <h2 className="font-mono text-[#883232ed] text-2xl font-bold">JACK</h2>
        <p className="font-mono text-gray-500">professional in styling</p>
      </div>
    </div>

    {/* Repeat for Thomas */}
    <div className="flex flex-col items-center text-center border border-[#575656a3] p-2 rounded-xl shadow-[10px_10px_10px_rgba(86,86,86,0.479)] bg-white transition-transform hover:scale-105">
      <img 
        className="w-full aspect-square object-cover rounded-lg" 
        src={barber3} 
        alt="Thomas" 
      />
      <div className="py-4">
        <h2 className="font-mono text-[#883232ed] text-2xl font-bold">THOMAS</h2>
        <p className="font-mono text-gray-500">professional in beard grooming</p>
      </div>
    </div>

  </div>
</section>
        </>
    )

}
export default Landing