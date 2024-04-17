import React, { useEffect, useState } from "react";
import { useProgress } from "../../context/ProgressContext";

const Header: React.FC = () => {
  const { beautyServiceProgress, scheduleProgress, reservationProgress } =
    useProgress();
  const [progressBarWidth, setProgressBarWidth] = useState<number>(0);

  useEffect(() => {
    switch (true) {
      case beautyServiceProgress > 0 && beautyServiceProgress <= 10:
        setProgressBarWidth(10);
        break;
      case scheduleProgress > 10 && scheduleProgress <= 70:
        setProgressBarWidth(70);
        break;
      case reservationProgress > 50 && reservationProgress <= 90:
        setProgressBarWidth(90);
        break;
      default:
        setProgressBarWidth(0);
    }
  }, [beautyServiceProgress, scheduleProgress, reservationProgress]);

  return (
    <div>
      <h2>Seleccionar servicio</h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-colorprogresbar h-2.5 rounded-full"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
