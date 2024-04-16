const Booking = () => {
  return (
    <div className=" flex justify-center items-center pt-10 border-2 border-colorborder">
      <div>
        <p>Servicio:</p>
        <p>nombre categoria</p>
      </div>

      <div className="flex">
        <p>Fecha:</p>
        <p>fecha y hora </p>
      </div>

      <div>
        <button>Anterior </button>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default Booking;
