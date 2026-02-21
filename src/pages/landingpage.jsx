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
        <section className="landing-div font-extrabold text-2xl">
            <div className="tittle-div mt-10">
            <h1>LOOK GOOD,
                <br></br>
                FEEL CONFIDENT,
                <br></br>
                BOOK YOUR FAVORITE BARBER AND STYLE</h1>
                
                <button
                 onClick={checkcondition}>BOOK NOW<span> &gt;</span></button>
                </div>
                <div className="logo-div">
                    <img src={image} alt="" />
                </div>
        </section>
        <section id='about' className='aboutus-div'>
            <div className='heading-div'>
                <h1>About Us</h1>
            </div>
            <div className='sentence-div'>
                <p>BARBERQ is a modern grooming platform where personalized style meets professional precision.
                We connect customers with skilled professionals who understand individuality, precision, and confidence. Every service is designed to help you look sharp, feel comfortable, and express your unique style with ease.
                Grooming is more than a service — it’s an experience. Our platform brings together experienced barbers and customers in a space where quality, hygiene, and attention to detail come first. From classic cuts to modern styles, we focus on delivering results that reflect your personality and lifestyle.
                BARBERQ was created to simplify grooming. We provide a reliable platform where customers can discover trusted barbers, book services effortlessly, and enjoy consistent quality. By combining modern technology with skilled craftsmanship, we make professional grooming accessible and stress-free.
                BARBERQ is designed for people who value confidence and comfort. We believe everyone deserves a style that fits them perfectly, and our goal is to make grooming easy, reliable, and personal. With a focus on quality service and customer satisfaction, we help you look your best every day.
                its not only styling a person ,the perfect styling give the person confident,personality,
                Mainly our platform notfocus only on just barbers,we are offering the best preffesional barbers and beauticians .
                </p>
            </div>
            

        </section>
        <section id='services' className='service-div'>
            <div className='serviceheading'>
                <h1>Our Services</h1>
            </div>
            <div className='serviceimges'>
                <img src={service1} alt="" />
                <img src={service2} alt="" />
                <img src={service3} alt="" />
                <img src={service4} alt="" />
                <img src={service5} alt="" />
                <img src={service6} alt="" />
            </div>

        </section>
        <section className='barbers-div'>
            <h1 className='barbertittle'>Meet our preffesionals</h1>
            <div className='bigcard'>
            <div className='card'>
                <img src={barber1} alt="" />
                <h2 className='name1'>EDWARD</h2>
                <p className='p-haircut'>preffesional in haircut</p>
            </div>


            <div className='card'>
                <img src={barber2} alt="" />
                <h2>JACK</h2>
                <p>preffesional in styling</p>
            </div>


            <div className='card'>
            <img src={barber3} alt="" />
            <h2>THOMAS</h2>
            <p>preffesional in beard grooming</p>
            </div>
            </div>
        </section>
        </>
    )

}
export default Landing