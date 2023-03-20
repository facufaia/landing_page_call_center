import ContactUs from "../components/contact_us"
import WhoWeAre from "../components/who_we_are"
import ContactForm from "../components/contact_form"
import { BsArrowDown } from "react-icons/bs"

function WhoWeUs(){
    return(
        <main className="flex flex-col">
            <section className="h-screen bg-no-repeat background bg-cover bg-top" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/sonrisa-negocios-alto-nivel-reunion-equipo_1262-2323.jpg?w=826&t=st=1677800006~exp=1677800606~hmac=474f8e6b9e23d7501cd42a701287a01ff20637ea39bc240d3ecca645b0933641')"}}>
                <div className="z-10 h-full relative flex w-full text-center flex-col text-sm items-center gap-2 text-white p-5 justify-center lg:gap-12">
                    <h1 className="text-5xl font-bold lg:text-6xl">Conocé nuestras oficinas</h1>
                    <p className="m-5 mb-10 text-2xl lg:text-2xl lg:w-1/3">
                        Somos un equipo especializado con más de 30 años de experiencia.
                        </p>
                    <ContactUs />
                    <BsArrowDown className="text-4xl min-[380px]:text-6xl absolute bottom-4"/>
                </div>
            </section>
            <section className="mt-16 mx-20 mb-12 text-center text-sm text-gray-600 lg:mx-44 lg:text-2xl lg:py-14">
                <p>Nuestra propuesta es brindar ayuda a nuestros clientes a rectificar, suprimir y/o actualizar sus deudas caducas, pagas y no pagas ante las bases de datos de las diversas centrales de riesgo crediticio, mediante la aplicación de las previsiones contenidas en la Ley de Protección de Datos Personales.<br/><br/>De este modo, ofrecemos como servicios el análisis del historial crediticio del cliente y la gestión de los reclamos legales pertinentes ante las diversas centrales y entidades de riesgo crediticio del país.
                </p>
            </section>  
            <WhoWeAre/>
            <ContactForm/>
        </main>
    )
}

export default WhoWeUs