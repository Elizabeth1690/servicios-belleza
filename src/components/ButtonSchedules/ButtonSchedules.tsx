import { useState } from "react";

const ButtonSchedules = () => {
  const [clickSchedule, setClickSchedule] = useState<boolean>(false);

  const [activeButton, setActiveButton] = useState<string>("");

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };

  const handleSchedule: () => void = () => setClickSchedule(true);
  return (
    <div>
      <h1>Próximos turnos disponibles</h1>
      <p>24 de abril</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        <button
          className={`${
            activeButton === "id1"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id1");
            handleSchedule();
          }}
        >
          prueba
        </button>
        <button
          className={`${
            activeButton === "id2"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id2");
            handleSchedule();
          }}
        >
          bueno
        </button>
        <button
          className={`${
            activeButton === "id3"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id3");
            handleSchedule();
          }}
        >
          salgo
        </button>
        <button
          className={`${
            activeButton === "id4"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id4");
            handleSchedule();
          }}
        >
          todo
        </button>
      </div>
      <p>24 de abril</p>
      <div>
        <button
          className={`${
            activeButton === "id5"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id5");
            handleSchedule();
          }}
        >
          hola
        </button>
        <button
          className={`${
            activeButton === "id6"
              ? " bg-colorbtndark w-40 py-8 "
              : "bg-colorbtnschedule"
          } `}
          onClick={() => {
            handleButtonClick("id6");
            handleSchedule();
          }}
        >
          bueno
        </button>
        <div>
          <button className="bg-colorbtndark">Anterior </button>
          {clickSchedule && (
            <button className="bg-colorbtndark">Siguiente</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ButtonSchedules;
