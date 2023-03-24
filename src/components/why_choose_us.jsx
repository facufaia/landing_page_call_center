import ContactUs from "./contact_us"
import Bar from "./bar"
import useIntersection from "../components/function"

function WhyChooseUs(){

    const [elementRef, isIntersecting] = useIntersection({
        threshold: .3,
    })
    const [elementRef1, isIntersecting1] = useIntersection({
        threshold: .3,
    })

    return(
        <section ref={elementRef} className={`flex flex-wrap lg:h-min bg-slate-50 opacity-0 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}>
            <div className="sm:w-1/2 sm:max-lg:h-screen bg-cover position lg:w-5/12" style={{backgroundImage:"url('https://img.freepik.com/foto-gratis/pareja-feliz-divirtiendose-mientras-compra-linea-casa_637285-12597.jpg?w=826&t=st=1677401463~exp=1677402063~hmac=f15e46084f8dffcbb5566e5610ae3d19f0fd485c3938e610a74694284a8a6366')"}}/>
            <div className="flex flex-col justify-center gap-6 py-12 pl-10 sm:pl-14 lg:w-6/12 lg:gap-12">
                <Bar />
                <h2 className="font-medium text-3xl mt-3 lg:text-4xl">¿Por qué elegirnos?</h2>
                <ul ref={elementRef1} className={`text-lg list-disc mb-3 pl-7 pr-10 text-gray-500 lg:text-2xl opacity-0 ${isIntersecting1 ? "animate__animated animate__fadeIn" : ""}`}>
                    <li>Cobertura en toda la Rep. Argentina</li>
                    <li>Garantía, Confianza y Seguridad</li>
                    <li>Te brindamos asesoramiento ante amenazas de embargo o ante el reclamo de intereses usureros respecto a tus deudas.</li>
                    <li>Eliminamos TODAS tus DEUDAS caducas PAGAS y NO PAGAS</li>
                    <li>La Ley de Protección de datos te ampara</li>
                    <li>Salí del registro de morosos y recuperá la posibilidad de solicitar nuevos créditos.</li>
                </ul>
                <ContactUs/>
            </div>
        </section>
    )
}

export default WhyChooseUs