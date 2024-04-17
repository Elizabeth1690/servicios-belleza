// Reservation.js
import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import ReservationConfirmation from "../../components/ReservationConfirmation/ReservationConfirmation";

const Reservation = () => {
  const { setReservationProgress } = useProgress();

  useEffect(() => {
    setReservationProgress(90);
  }, [setReservationProgress]);

  return (
    <>
      <ReservationConfirmation />
    </>
  );
};

export default Reservation;
