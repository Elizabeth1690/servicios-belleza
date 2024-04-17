import { useState, useEffect } from "react";

type ButtonId = string;

const ButtonSchedules = () => {
  const [availableTimeslots, setAvailableTimeslots] = useState<string[]>([]);
  const [clickSchedule, setClickSchedule] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<ButtonId>("");

  useEffect(() => {
    fetch(
      "https://file.notion.so/f/f/1d7049f6-d896-4891-9b3a-dab7e77463f3/6649d5a4-69b5-41d2-afba-f1396419b92e/slots.txt?id=237dd341-41db-4c0d-949d-b5abf6ae31be&table=block&spaceId=1d7049f6-d896-4891-9b3a-dab7e77463f3&expirationTimestamp=1713398400000&signature=BGV3wbD5PffzCZD7MpqFjdPmPy24K7z0qiJ1MpKdGJc&downloadName=slots.txt"
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        setAvailableTimeslots(parsedData.availableTimeslots);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = (buttonId: ButtonId) => {
    setActiveButton(buttonId);
    setClickSchedule(true);
  };

  return (
    <div>
      <h1>Próximos turnos disponibles</h1>
      <p>24 de abril</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        {availableTimeslots.map((timeslot, index) => (
          <button
            key={index}
            className={`${
              activeButton === `id${index + 1}`
                ? "bg-colorbtndark w-40 py-8"
                : "bg-colorbtnschedule"
            }`}
            onClick={() => handleButtonClick(`id${index + 1}`)}
          >
            {timeslot}
          </button>
        ))}
      </div>
      <p>24 de abril</p>
      <div>
        <button className="bg-colorbtndark">Anterior </button>
        {clickSchedule && (
          <button className="bg-colorbtndark">Siguiente</button>
        )}
      </div>
    </div>
  );
};

export default ButtonSchedules;
