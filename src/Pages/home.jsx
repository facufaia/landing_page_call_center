import ContactUs from "../components/contact_us"
import WhoWeAre from "../components/who_we_are"
import ContactForm from "../components/contact_form"
import WhyChooseUs from "../components/why_choose_us"
import { BsArrowDown } from 'react-icons/bs';
import {RxMagnifyingGlass} from 'react-icons/rx';
import {TbMessages} from 'react-icons/tb';
import {AiOutlineCheck} from 'react-icons/ai';
import '../index.css'
import { useState, useEffect, useRef } from "react";

function Home(){

    const imageText = useRef(),
    item1 = useRef(),
    item2 = useRef(),
    item3 = useRef()
    
    // useEffect(()=>{

    //     const observedComponents = [imageText,item1,item2,item3]

    //     const observer = new IntersectionObserver(entries => {
    //         entries.forEach(entry => {
    //             console.log(item1.current);
    //         })
    //     })

    //     if (observedComponents){
    //         observedComponents.forEach(element => {
    //             if(element.current){
    //                 observer.observe(element.current)
    //             }
    //         });
    //     }
    //     observer.observe(item1.current)
    //     return () => {
    //         observer.disconnect()
    //     }
    // },[])


    return(
        <main className="w-full">
            <section className="h-screen bg-no-repeat background bg-cover bg-top" style={{backgroundImage: "url('https://img.freepik.com/foto-gratis/futuros-padres-haciendo-compras-online-bebe_329181-3249.jpg?w=826&t=st=1677401165~exp=1677401765~hmac=d9475ac3fc8cf61b42e7ecca3ca3fdf28b42920ef1e4a21322850c8ed0b555a1')"}}>
                <div ref={imageText} className="z-10 h-full relative flex justify-center w-full text-center flex-col text-sm items-center px-8 text-white lg:gap-12">
                    <h1 className="text-5xl font-bold min-[380px]:text-6xl lg:text-8xl">Viví libre de deudas</h1>
                    <p className="m-10 text-xl min-[380px]:text-2xl lg:text-4xl lg:mx-36">Salí hoy de las principales centrales de riesgo crediticio del país.
                    Eliminamos tu nombre en forma rápida y segura, en un trámite online.
                    Volvé a disfrutar de préstamos y tarjetas.</p>
                    <div className="flex flex-col items-center gap-8 lg:flex-row">
                        <ContactUs />
                        <button><a className="border-white border-solid border-2 py-1 tracking-wider px-2 duration-500 hover:bg-white hover:text-black lg:text-4xl">BAJA DE SERVICIO</a></button>
                    </div>
                    <BsArrowDown className="text-4xl min-[380px]:text-6xl absolute bottom-4"/>
                </div>
            </section>
            <section className="flex-col flex gap-14 mx-14 my-10 lg:my-16 lg:mb-20 lg:gap-24">
                <div className="flex flex-wrap gap-8 mt-6">
                    <h2 className="text-3xl sm:w-3/6 lg:text-4xl">Brindamos soluciones a nuestros clientes en <b>toda la Rep. Argentina</b></h2>
                    <p className="text-xl text-gray-500 sm:w-2/6">​Nuestro <b>equipo especializado</b> se encarga de <b>eliminar en forma definitiva todo registro de deudas de las bases de datos de informe de riesgo</b> crediticio haciendo valer las prerrogativas de la Ley de Protección de los Datos Personales (Ley Nº 25.326).</p>
                </div>
                <div className="flex flex-wrap justify-center gap-7 text-center lg:gap-16">
                    <div ref={item1} className="flex flex-col items-center gap-2 lg:w-3/12">
                        <RxMagnifyingGlass className="text-7xl text-red-800"/>
                        <h3 className="text-2xl">Analizamos tu caso</h3>
                        <p className="text-gray-500 text-lg">Dejanos tus datos y un asesor especializado se comunicará para ayudarte.</p>
                    </div>
                    <div ref={item2}className="flex flex-col items-center gap-2 lg:w-4/12">
                        <TbMessages className="text-7xl text-red-800"/>
                        <h3 className="text-2xl">Propuesta personalizada</h3>
                        <p className="text-gray-500 text-lg">Abogando a ultranza con el fin de hacer valer la normativa vigente que ampara y favorece a los deudores del sistema financiero.</p>
                    </div>
                    <div ref={item3} className="flex flex-col items-center gap-2 lg:w-3/12">
                        <AiOutlineCheck className="text-7xl text-red-800"/>
                        <h3 className="text-2xl">Tus problemas solucionados</h3>
                        <p className="text-gray-500 text-lg">Volvé a disfrutar; con tranquilidad y nuevas posibilidades.</p>
                    </div>
                </div>
            </section>
            <WhyChooseUs />
            <ContactForm />
            <WhoWeAre />
            <button onScroll={(e)=>{
                console.log("button");
                AppearAnimation(e)
            }} className="bg-red-800 tracking-wider px-2 hover:bg-white hover:text-red-800 duration-500 text-white w-max mb-10 ml-10 border border-red-800 pb-1"><a>Términos y Condiciones</a></button>
        </main>
    )
}

export default Home