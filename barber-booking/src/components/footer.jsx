function Footer(){
    return(
        <div className="flex justify-between py-1.5 px-5 mx-5 bg-amber-950 text-amber-50 m-2.5">
            <div className="left-div">
            <h2 className="font-extrabold text-2xl">Join us today</h2>
            <h4>BARBERQ</h4>
            <p>Book professional barbers easily and look your best</p>
            <p>BARBERQ&copy;{new Date().getFullYear()}</p>
            </div>
            <div className="right-div">
                <h3>Contact Us</h3>
                <p>📍 Kerala, India</p>
                <p>📞 +91 9539363006</p>
                <p>📧support@barberq.com</p>
            </div>

            
        </div>
    )

}
export default Footer