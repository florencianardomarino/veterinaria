import { useState, useEffect } from 'react' 
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [paciente, setPaciente] = useState(JSON.parse(localStorage.getItem('paciente')) ?? []);
  const [pacientes, setPacientes] = useState({});

  useEffect(()=>{
      localStorage.setItem('paciente', JSON.stringify(paciente))
  },[paciente])

  const eliminarPaciente = id => {
      const pacientesActualizados = paciente.filter( paciente => paciente.id !== id )
      setPaciente(pacientesActualizados)
  };
  
  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario
        paciente={paciente}
        pacientes={pacientes}
        setPaciente={setPaciente}
        setPacientes={setPacientes}
        />
        <ListadoPacientes
        paciente={paciente}
        pacientes={pacientes}
        setPacientes={setPacientes}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
