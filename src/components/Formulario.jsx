import { useState, useEffect } from "react"

const Formulario = () => {
    const [ nombre, setNombre ] = useState("");
    const [ propietario, setPropietario ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ fecha, setFecha ] = useState("");
    const [ sintomas, setSintomas ] = useState("");

    const handleSubmit = (e)=>{e.preventDefault()
                console.log('Enviando formulario')}

    return (
        <>
            <div className="md:w-1/2 lg:w-3/5 mx-5" >
                <h2 className= "font-black text-3xl text-center">Seguimiento pacientes</h2>

                <p className="text-lg mt-5 text-center mb-10">
                    Añade pacientes y <span className="text-indigo-600 font-bold">Administralos</span>
                </p>

                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                    <div className="mb-5">
                        <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota</label>
                        <input id="mascota" placeholder="Nombre de la mascota" type="text" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={nombre} onChange={(e)=> setNombre(e.target.value)} />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre propietario</label>
                        <input id="propietario" placeholder="Nombre del propietario" type="text" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={propietario} onChange={(e)=> setPropietario(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                        <input id="email" placeholder="Email contacto propietario" type="text" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
                        <input id="alta" type="date" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={fecha} onChange={(e)=> setFecha(e.target.value)}/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
                        <textarea id="sintomas" placeholder="Describe los síntomas" className="border-2 w-full p-2 placeholder-gray-400 rounded-md" value={sintomas} onChange={(e)=> setSintomas(e.target.value)}/>
                    </div>
                    <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer  transition-all" value="Agregar paciente"/>
                </form>
            </div>
        </>
  )
}

export default Formulario