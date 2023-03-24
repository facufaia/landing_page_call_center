import ContactForm from "../components/contact_form"
import ContactUs from "../components/contact_us"
import WhyChooseUs from "../components/why_choose_us"
import {BsArrowDown} from "react-icons/bs"
import 'animate.css'

function Contact(){
    return(
        <main>
            <section className="h-screen bg-no-repeat background bg-cover bg-top" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/feliz-pareja-mostrando-tarjeta-fidelidad_23-2148303811.jpg?w=826&t=st=1677810105~exp=1677810705~hmac=871d119103e64c598378b10124546690ef2ade59e1c3b49cd3816573c9653656')"}}>
            <div className="z-10 h-screen relative flex justify-center w-full text-center flex-col text-sm items-center px-8 text-white lg:gap-12 animate__animated animate__fadeIn">
                <h1 className="text-4xl font-bold min-[380px]:text-6xl">
                    Defendemos sus derechos
                </h1>
                <p className="m-10 text-xl min-[380px]:text-2xl lg:mx-56">
                    Volvé a disfrutar de préstamos y tarjetas. Completá el formulario y un especialista se contactará a la brevedad
                </p>
                <ContactUs />
                <BsArrowDown className="text-4xl min-[380px]:text-6xl absolute bottom-4"/>
            </div>
        </section>
        <ContactForm/>
        <WhyChooseUs/>
    </main>
    )
}

export default Contact