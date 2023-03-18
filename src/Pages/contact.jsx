import ContactForm from "../components/contact_form"
import ContactUs from "../components/contact_us"
import WhyChooseUs from "../components/why_choose_us"
import {BsArrowDown} from "react-icons/bs"

function Contact(){
    return(
        <main>
            <section className="h-screen background" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/feliz-pareja-mostrando-tarjeta-fidelidad_23-2148303811.jpg?w=826&t=st=1677810105~exp=1677810705~hmac=871d119103e64c598378b10124546690ef2ade59e1c3b49cd3816573c9653656')"}}>
            <div className="z-10 h-full relative flex justify-end w-full text-center flex-col text-sm items-center p-4 text-white">
                <h1 className="text-4xl font-bold">
                    Defendemos sus<br/>derechos
                </h1>
                <p className="m-6">
                    Volvé a disfrutar de préstamos y tarjetas. Completá el formulario y un<br/>especialista se contactará a la brevedad
                </p>
                <ContactUs />
                <BsArrowDown className="text-3xl mt-8"/>
            </div>
        </section>
        <ContactForm/>
        <WhyChooseUs/>
    </main>
    )
}

export default Contact