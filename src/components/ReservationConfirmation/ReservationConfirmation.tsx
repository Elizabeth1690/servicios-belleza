import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";

interface ReservationConfirmationProps {
  selectedDate: string;
  selectedTimeslot: string;
}

const ReservationConfirmation: React.FC<ReservationConfirmationProps> = () => {
  const { setReservationProgress } = useProgress();
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const selectedDate = params.get("selectedDate") || "";
  const selectedTimeslot = params.get("selectedTimeslot") || "";

  useEffect(() => {
    setReservationProgress(90);
  }, [setReservationProgress]);

  return (
    <div className="flex justify-center items-center pt-10 border-2 border-colorborder w-full">
      <div>
        <p>Servicio:</p>
        <p>nombre categoria</p>
      </div>

      <div className="flex">
        <p>Fecha:</p>
        <p>
          {selectedDate} {selectedTimeslot}
        </p>
      </div>

      <div>
        <button>Anterior</button>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default ReservationConfirmation;
