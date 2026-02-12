import image from '../assets/book barber.png'
import service1 from '../assets/service1.jpeg'
import service2 from '../assets/service2.jpeg'
import service3 from '../assets/service3.jpg'
import service4 from '../assets/services4.jpeg'
import service5 from '../assets/service5.jpeg'
import service6 from '../assets/service6.jpeg'
import barber1 from '../assets/barberpoto.jpg'
import barber2 from '../assets/barber1.jpeg'
import barber3 from '../assets/barber2.jpeg'
function Landing(){
    return(
        <>
        <section className="landing-div">
            <div className="tittle-div">
            <h1>LOOK GOOD,
                <br></br>
                FEEL CONFIDENT,
                <br></br>
                BOOK YOUR FAVORITE BARBER AND STYLE</h1>
                <button>BOOK NOW<span> &gt;</span></button>
                </div>
                <div className="logo-div">
                    <img src={image} alt="" />
                </div>
        </section>
        <section className='aboutus-div'>
            <div className='heading-div'>
                <h1>About Us</h1>
            </div>
            <div className='sentence-div'>
                <p>UNISTYLE is a modern grooming platform where personalized style meets professional precision.
                We connect customers with skilled professionals who understand individuality, precision, and confidence. Every service is designed to help you look sharp, feel comfortable, and express your unique style with ease.
                Grooming is more than a service — it’s an experience. Our platform brings together experienced barbers and customers in a space where quality, hygiene, and attention to detail come first. From classic cuts to modern styles, we focus on delivering results that reflect your personality and lifestyle.
                UNISTYLE was created to simplify grooming. We provide a reliable platform where customers can discover trusted barbers, book services effortlessly, and enjoy consistent quality. By combining modern technology with skilled craftsmanship, we make professional grooming accessible and stress-free.
                UNISTYLE is designed for people who value confidence and comfort. We believe everyone deserves a style that fits them perfectly, and our goal is to make grooming easy, reliable, and personal. With a focus on quality service and customer satisfaction, we help you look your best every day.
                its not only styling a person ,the perfect styling give the person confident,personality,
                Mainly our platform notfocus only on just barbers,we are offering the best preffesional barbers and beauticians .
                </p>
            </div>
            

        </section>
        <section className='service-div'>
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