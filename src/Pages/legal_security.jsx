import ContactForm from "../components/contact_form"
import ContactUs from "../components/contact_us"
import Bar from "../components/bar"
import {BsArrowDown} from "react-icons/bs"


function LegalSecurity(){
    return(
        <main className="flex flex-col">
            <section className="h-screen background" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/recortar-escritura-hombre-elegante_23-2147717378.jpg?w=826&t=st=1677807447~exp=1677808047~hmac=2affa29c9de0fff585109a6786e28a280548cd23ce5deb7b3deac598d71e3100')"}}>
                <div className="z-10 h-full relative flex justify-end w-full text-center flex-col text-sm items-center text-white p-4">
                    <h1 className="text-4xl font-bold">
                        Trabajo seguro y con<br/>garantía
                    </h1>
                    <p className="m-5 mb-10">
                        La eliminación de sus deudas caducas se<br/>encuentra <b>GARANTIZADA</b> por <b>LEY</b> (La ley de Protección de Datos<br/>Personales a usted le ampara y le favorece).
                    </p>
                    <ContactUs />
                    <BsArrowDown className="text-3xl mt-10"/>
                </div>
            </section>
            <section className="mt-16 mx-32 mb-12 flex gap-7">
                <h2 className="text-lg">
                    Brindamos garantías legales por todos nuestros trabajos.
                </h2>
                <p className="text-gray-500 text-xs">
                    Trabajamos en toda la República Argentina, con trámites 100% online y express.
                </p>
            </section>
            <section className="flex h-screen">
                <div className="p-40 bg-cover position2" style={{backgroundImage:"url('https://img.freepik.com/foto-gratis/orden-joven-linea-tarjeta-credito-telefono-movil_176420-20015.jpg?w=826&t=st=1677808474~exp=1677809074~hmac=467a70ef6aca04202335eda6ef42b7f1ebc4e8f5bd4631c8b85e24a201c37cfe')"}}/>
                <div className="flex flex-col justify-center gap-3 bg-slate-50 pl-14    ">
                    <Bar />
                    <h2 className="font-medium text-lg mt-3">Garantías Legales</h2>
                    <p className="text-gray-600 mr-16" style={{fontSize:".69rem"}}>
                        Nuestro equipo especializado se encuentra ubicado  en la Ciudad Autónoma de Buenos Aires.<br/>Estar situados en <b>CABA</b> nos permite ayudar a cada uno de nuestros clientes en cada rincón del país por encontrarnos <b>ESTRATEGICAMENTE</b> en el mismo territorio que se encuentran situadas las restantes centrales de riesgo crediticio y el BANCO CENTRAL DE LA REPUBLICA ARGENTINA  que es el organismo rector del sistema financiero de la Argentina.<br/>Encontrarnos en la jurisdicción de las entidades de créditos y las entidades calificadoras de riesgo crediticio nos permite a brindar una ayuda a <b>NIVEL NACIONAL</b> y ofrecer un tramite 100% <b>ONLINE</b> y <b>EXPRESS</b>.
                    </p>
                    <ContactUs />
                </div>
            </section>
            <section className="bg-red-800 text-gray-200 px-20 text-center py-16 text-xs">
                <p>
                    Dado que el compromiso y la transparencia son pilares fundamentales para nuestra compañía, continuaremos acompañándole en lo que usted considere necesario y, sin perjuicio de encontrarse en nuestra página web la descripción de los servicios que ofrecemos («Nuestro servicios»), el «Aviso legal» y los «Términos y condiciones» que rigen nuestros servicios en pos de lograr la rectificación, supresión y/o actualización de sus deudas caducas, pagas y no pagas, nuestro equipo le hará llegar vía mail y vía WhatsApp todas las seguridades legales que tiene al realizar la gestión con nosotros, nuestro número de teléfono, ubicación física, nombre y apellido del analista especializado a cargo de su caso, un resumen de las acciones por usted encomendadas y lo más importante de todo es que tendrá a su entera disposición nuestro número de CUIT para que pueda verificar ante la AFIP que somos una entidad inscripta y legalmente constituida.<br/><br/>De esta manera usted contará con la TRANQUILIDAD y SEGURIDAD que podrá confiar en nosotros porque:
                    <ol>
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
                </p>
                <button className="text-white w-28 h-6 hover:bg-white hover:text-red-800 duration-500 border border-white mt-8">
                    <a>Veamos tu caso</a>
                </button>
            </section>
            <ContactForm/>
        </main>
    )
}

export default LegalSecurity