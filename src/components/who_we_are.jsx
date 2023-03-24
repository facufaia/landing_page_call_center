import Bar from "./bar"
import useIntersection from "../components/function"

function WhoWeAre(){

    const [elementRef, isIntersecting] = useIntersection({
        threshold: .1,
    })
    const [elementRef1, isIntersecting1] = useIntersection({
        threshold: .1,
    })
    const [elementRef2, isIntersecting2] = useIntersection({
        threshold: .1,
    })
    const [elementRef3, isIntersecting3] = useIntersection({
        threshold: .1,
    })
    const [elementRef4, isIntersecting4] = useIntersection({
        threshold: .1,
    })
    const [elementRef5, isIntersecting5] = useIntersection({
        threshold: .1,
    })

    return(
        <section ref={elementRef} className={`flex flex-col items-center text-center mx-10 tablet:mx-20 gap-2 my-14 opacity-0 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}>
            <Bar />
            <h2 className="text-4xl mt-8">Quiénes Somos</h2>
            <h3 className="text-red-800 mb-6 text-2xl">Somos un equipo de expertos</h3>
            <div className="text-lg flex flex-col tablet:flex-row text-gray-500 gap-4 text-center lg:flex-row lg:mx-40 lg:gap-32 lg:my-10">
                <p ref={elementRef1} className={`lg:w-1/2 opacity-0 ${isIntersecting1 ? "animate__animated animate__fadeIn" : ""}`}>Nuestro <b>equipo especializado</b> se encarga de <b>eliminar en forma definitiva todo registro de deudas de las bases de datos de informe de riesgo crediticio</b> haciendo valer las prerrogativas de la Ley de Protección de los Datos Personales (Ley Nº 25.326).<br/><br/>
                Escuchar a diario: “Mi Score es bajo” “Me quieren cobrar el triple del valor real mi deuda ” “ Necesito limpiar mi firma” “Me rechazan por mi puntaje” “Quiero tener tarjetas o un simple credito pero figuro en situación 5” nos motiva y nos permite a comprender que vamos por el camino correcto ayudando a quienes mas nos necesitan sabiendo cuan importante resulta en la actualidad <b>volver a recuperar el acceso al credito.</b></p>
                <div ref={elementRef2} className={`lg:w-1/2 flex flex-col items-center gap-7 opacity-0 ${isIntersecting2 ? "animate__animated animate__fadeIn" : ""}`}>
                    <p>Esta es la razon por lo cual brindamos una cobertura integral y abarcativa poniendo nuestro profesionalismo al servicio de nuestros clientes haciendo de nuestra organización <b>la única</b> en conocer y acompañar al cliente con problemas crediticios a comerzar un nuevo camino orientado hacia una nueva vida <b>sin deudas y junto a tarjetas, prestamos y créditos.</b></p>
                    <button ref={elementRef3} className={`bg-red-800 text-white w-max px-2 pb-1 text-lg hover:bg-white hover:text-red-800 duration-500 border border-red-800 min-[380px]:text-2xl lg:my-16 opacity-0 ${isIntersecting3 ? "animate__animated animate__fadeIn" : ""}`}><a>Veamos tu caso</a></button>
                </div>
            </div>
            <div className="flex flex-col tablet:flex-row gap-8 justify-evenly w-full mt-6 lg:flex-row">
                <div ref={elementRef4} className={`flex flex-col items-center opacity-0 ${isIntersecting4 ? "animate__animated animate__fadeIn" : ""}`}>
                    <span className="text-5xl text-red-800 font-bold">7490</span>
                    <h4 className="text-2xl text-gray-600">Clientes felices</h4>
                </div>
                <div ref={elementRef5} className={`flex flex-col items-center opacity-0 ${isIntersecting5 ? "animate__animated animate__fadeIn" : ""}`}>
                    <span className="text-5xl text-red-800 font-bold">98%</span>
                    <h4 className="text-2xl text-gray-600">Problemas resueltos</h4>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre