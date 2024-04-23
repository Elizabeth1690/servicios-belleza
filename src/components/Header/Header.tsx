// Header.tsx
import React, { useEffect, useState } from "react";
import { useProgress } from "../../context/ProgressContext";

const Header: React.FC = () => {
  const { beautyServiceProgress, scheduleProgress, reservationProgress } =
    useProgress();
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    // Esto es para actualizar la barra de progreso cuando scheduleProgress cambia
    setProgressBarWidth(beautyServiceProgress);
  }, [beautyServiceProgress]);

  useEffect(() => {
    // Esto es para actualizar la barra de progreso cuando scheduleProgress cambia
    setProgressBarWidth(scheduleProgress);
  }, [scheduleProgress]);

  useEffect(() => {
    // Esto es para actualizar la barra de progreso cuando scheduleProgress cambia
    setProgressBarWidth(reservationProgress);
  }, [reservationProgress]);

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
