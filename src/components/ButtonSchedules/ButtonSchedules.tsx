import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

type ButtonId = string;

const ButtonSchedules: React.FC = () => {
  const [availableTimeslots, setAvailableTimeslots] = useState<string[]>([]);
  const [clickSchedule, setClickSchedule] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<ButtonId>("");
  const [date, setDate] = useState<string>("");
  const [nextDate, setNextDate] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTimeslot, setSelectedTimeslot] = useState<string>("");
  const { setReservationProgress } = useProgress();

  const handleNextButtonSchedules = () => {
    setReservationProgress(90);
  };

  useEffect(() => {
    fetch(
      "https://file.notion.so/f/f/1d7049f6-d896-4891-9b3a-dab7e77463f3/6649d5a4-69b5-41d2-afba-f1396419b92e/slots.txt?id=237dd341-41db-4c0d-949d-b5abf6ae31be&table=block&spaceId=1d7049f6-d896-4891-9b3a-dab7e77463f3&expirationTimestamp=1713895200000&signature=KP2QiCEriSeLDnKGRFH76mTnOr1uXIVdW9vhs47IL3g&downloadName=slots.txt"
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData: { availableTimeslots: string[]; date: string } =
          JSON.parse(data);
        const filteredTimeslots = parsedData.availableTimeslots.filter(
          (timeslot) => ["11:00", "12:00", "10:00", "10:30"].includes(timeslot)
        );
        setAvailableTimeslots(filteredTimeslots);
        setDate(parsedData.date);
        const nextDateData = {
          date: "2024-04-29",
          availableTimeslots: ["15:00", "15:30"],
        };
        setNextDate(nextDateData.date);
        setAvailableTimeslots((prevTimeslots) => [
          ...prevTimeslots,
          ...nextDateData.availableTimeslots,
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleButtonClick = (buttonId: ButtonId) => {
    setActiveButton(buttonId);
    setClickSchedule(true);

    let timeslot = "";

    if (buttonId.startsWith("id")) {
      setSelectedDate(date);
      timeslot = availableTimeslots[parseInt(buttonId.split("-")[1]) - 1];
    } else if (buttonId.startsWith("next-id")) {
      setSelectedDate(nextDate);
      timeslot = availableTimeslots[parseInt(buttonId.split("-")[2]) - 1];
    }

    setSelectedTimeslot(timeslot || ""); // Asegúrate de que selectedTimeslot tenga un valor
  };

  return (
    <div>
      <h1>Próximos turnos disponibles</h1>
      <p>{date}</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        {availableTimeslots
          .filter((timeslot) => !timeslot.startsWith("15:"))
          .map((timeslot: string, index: number) => (
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
      <p>{nextDate}</p>
      <div className="grid grid-cols-2 gap-x-2 gap-y-4">
        {availableTimeslots
          .filter((timeslot) => timeslot.startsWith("15:"))
          .map((timeslot, index) => (
            <button
              key={`next-${index}`}
              className="bg-colorbtnschedule"
              onClick={() => handleButtonClick(`next-id${index + 1}`)}
            >
              {timeslot}
            </button>
          ))}
      </div>
      <div>
        <button className="bg-colorbtndark">Anterior </button>
        {clickSchedule && (
          <Link
            to={`/reserva?selectedDate=${selectedDate}&selectedTimeslot=${selectedTimeslot}`}
          >
            <button
              className="bg-colorbtndark"
              onClick={handleNextButtonSchedules}
            >
              Siguiente
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ButtonSchedules;
