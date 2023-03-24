import ContactForm from "../components/contact_form"
import ContactUs from "../components/contact_us"
import Bar from "../components/bar"
import {BsArrowDown} from "react-icons/bs"
import 'animate.css'
import useIntersection from "../components/function"

function LegalSecurity(){

    const [elementRef, isIntersecting] = useIntersection({
        threshold: .2,
    })
    const [elementRef1, isIntersecting1] = useIntersection({
        threshold: .2,
    })
    const [elementRef2, isIntersecting2] = useIntersection({
        threshold: .2,
    })
    const [elementRef3, isIntersecting3] = useIntersection({
        threshold: .2,
    })
    const [elementRef4, isIntersecting4] = useIntersection({
        threshold: .2,
    })
    const [elementRef5, isIntersecting5] = useIntersection({
        threshold: .2,
    })

    return(
        <main className="flex flex-col">
            <section className="h-screen bg-no-repeat background bg-cover bg-top" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/recortar-escritura-hombre-elegante_23-2147717378.jpg?w=826&t=st=1677807447~exp=1677808047~hmac=2affa29c9de0fff585109a6786e28a280548cd23ce5deb7b3deac598d71e3100')"}}>
                <div className="z-10 h-screen relative flex justify-center w-full text-center flex-col text-sm items-center px-8 text-white lg:gap-12 animate__animated animate__fadeIn">
                    <h1 className="text-5xl font-bold min-[380px]:text-6xl">
                        Trabajo seguro y con<br/>garantía
                    </h1>
                    <p className="m-5 mb-10 lg:text-2xl lg:w-max">
                        La eliminación de sus deudas caducas se<br/>encuentra <b>GARANTIZADA</b> por <b>LEY</b> (La ley de Protección de Datos<br/>Personales a usted le ampara y le favorece).
                    </p>
                    <ContactUs />
                    <BsArrowDown className="text-4xl min-[380px]:text-6xl absolute bottom-4"/>
                </div>
            </section>
            <section ref={elementRef} className={`mx-12 my-20 flex gap-7 flex-wrap lg:mx-20 opacity-0 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}>
                <h2 className="text-3xl sm:w-3/6 lg:text-4xl">
                    Brindamos garantías legales por todos nuestros trabajos.
                </h2>
                <p className="text-xl text-gray-500 sm:w-2/6">
                    Trabajamos en toda la República Argentina, con trámites 100% online y express.
                </p>
            </section>
            <section ref={elementRef1} className={`flex flex-wrap lg:h-min bg-slate-50 opacity-0 ${isIntersecting1 ? "animate__animated animate__fadeIn" : ""}`}>
                <div className="sm:w-1/2 sm:max-lg:h-screen bg-cover bg-center lg:w-5/12" style={{backgroundImage:"url('https://img.freepik.com/foto-gratis/orden-joven-linea-tarjeta-credito-telefono-movil_176420-20015.jpg?w=826&t=st=1677808474~exp=1677809074~hmac=467a70ef6aca04202335eda6ef42b7f1ebc4e8f5bd4631c8b85e24a201c37cfe')"}}/>
                <div className="flex flex-col justify-center gap-6 py-12 px-10 lg:pl-10 sm:pl-14 lg:w-6/12 lg:gap-12">
                    <Bar />
                    <h2 className="font-medium text-3xl mt-3 lg:text-4xl">Garantías Legales</h2>
                    <p ref={elementRef2} className={`text-base mb-3 text-gray-500 lg:text-2xl opacity-0 ${isIntersecting2 ? "animate__animated animate__fadeIn" : ""}`}>
                        Nuestro equipo especializado se encuentra ubicado  en la Ciudad Autónoma de Buenos Aires.<br/>Estar situados en <b>CABA</b> nos permite ayudar a cada uno de nuestros clientes en cada rincón del país por encontrarnos <b>ESTRATEGICAMENTE</b> en el mismo territorio que se encuentran situadas las restantes centrales de riesgo crediticio y el BANCO CENTRAL DE LA REPUBLICA ARGENTINA  que es el organismo rector del sistema financiero de la Argentina.<br/>Encontrarnos en la jurisdicción de las entidades de créditos y las entidades calificadoras de riesgo crediticio nos permite a brindar una ayuda a <b>NIVEL NACIONAL</b> y ofrecer un tramite 100% <b>ONLINE</b> y <b>EXPRESS</b>.
                    </p>
                    <ContactUs />
                </div>
            </section>
            <section className="bg-red-800 text-gray-200 px-10 text-center py-14 text-base lg:text-lg">
                <p ref={elementRef3} className={`opacity-0 ${isIntersecting3 ? "animate__animated animate__fadeIn" : ""}`}>
                    Dado que el compromiso y la transparencia son pilares fundamentales para nuestra compañía, continuaremos acompañándole en lo que usted considere necesario y, sin perjuicio de encontrarse en nuestra página web la descripción de los servicios que ofrecemos («Nuestro servicios»), el «Aviso legal» y los «Términos y condiciones» que rigen nuestros servicios en pos de lograr la rectificación, supresión y/o actualización de sus deudas caducas, pagas y no pagas, nuestro equipo le hará llegar vía mail y vía WhatsApp todas las seguridades legales que tiene al realizar la gestión con nosotros, nuestro número de teléfono, ubicación física, nombre y apellido del analista especializado a cargo de su caso, un resumen de las acciones por usted encomendadas y lo más importante de todo es que tendrá a su entera disposición nuestro número de CUIT para que pueda verificar ante la AFIP que somos una entidad inscripta y legalmente constituida.<br/><br/>De esta manera usted contará con la TRANQUILIDAD y SEGURIDAD que podrá confiar en nosotros porque:
                </p>
                <ol ref={elementRef4} className={`opacity-0 ${isIntersecting4 ? "animate__animated animate__fadeIn" : ""}`}>
                    <li>
                        1. La Ley de Protección de Datos Personales ampara y favorece a nuestros clientes.
                    </li>
                    <li>
                        2. Nuestro equipo le brindará un reporte diario de su gestión.
                    </li>
                    <li>
                        3. Recibirá asistencia post gestión y tendrá el respaldo de su asesor para que pueda realizar consultas y saldar cualquier tipo de inquietud, como así también tener orientación y pedir consejos crediticios.
                    </li>
                </ol>
                <button ref={elementRef5} className={`bg-red-800 text-white w-max px-2 pb-1 text-lg hover:bg-white hover:text-red-800 duration-500 border mt-12 border-white min-[380px]:text-2xl lg:mt-16 opacity-0 ${isIntersecting5 ? "animate__animated animate__fadeIn" : ""}`}>
                    <a>Veamos tu caso</a>
                </button>
            </section>
            <ContactForm/>
        </main>
    )
}

export default LegalSecurity