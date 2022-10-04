const Pacientes = () => {
  return (
    <>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: <span className="font-normal normal-case">Flor</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email:{" "}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta:{" "}
          <span className="font-normal normal-case">28/03/2020</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintomas:{" "}
          <span className="font-normal normal-case">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quam
            accusamus placeat sequi, adipisci quasi culpa accusantium velit
            temporibus laborum dicta recusandae consequuntur facilis qui et sit
            est nostrum a?
          </span>
        </p>
      </div>
    </>
  );
};

export default Pacientes;
