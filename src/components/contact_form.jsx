function ContactForm(){
    return(
        <form className="bg-gray-100 flex flex-wrap justify-center w-full gap-8 px-14 sm:px-20 py-14 lg:py-28 lg:gap-16">
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">Nombre</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="text" placeholder="Guillermo Pedro"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">Apellido</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="text" placeholder="Rodriguez"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">DNI</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="number" placeholder="10025067"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">Código de area</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="number" placeholder="011"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">Telefono</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="number" placeholder="58491290"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">Correo Electronico</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="email" placeholder="Guillermo.rodriguez@gmail.com"/>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">¿Pagaste tu deuda?</label>
                <div className="flex items-center text-lg">
                    <label value="si" name="deuda" className="ml-5">Si</label>
                    <input className="mr-8 ml-2" type="radio" />
                    <label value="no" name="deuda">No</label>
                    <input className="ml-2" type="radio" />
                </div>
            </div>
            <div className="flex flex-col w-full sm:w-2/5 gap-2">
                <label className="text-lg">¿En que año pagaste o dejaste de pagarla?</label>
                <input className="text-lg p-0.5 border-solid border-gray-400 border" type="text" placeholder="2008"/>
            </div>
            <button className="bg-red-800 text-white border-red-800 px-8 py-0.5 mt-3 tracking-wider text-lg border duration-500 hover:bg-white hover:text-red-800 lg:w-1/4">ENVIAR</button>
        </form>
    )
}

export default ContactForm