import useIntersection from "../components/function"

function ContactUs(){

    const [elementRef, isIntersecting] = useIntersection({
        threshold: .3,
    })

    return(
        <button ref={elementRef} className={`bg-red-800 text-lg py-1.5 leading-none tracking-wider px-2 hover:bg-white hover:text-red-800 duration-500 w-min text-white border border-red-800 min-[380px]:text-xl opacity-0 ${isIntersecting ? "animate__animated animate__fadeIn" : ""}`}><a>CONTACTANOS</a></button>
    )
}

export default ContactUs