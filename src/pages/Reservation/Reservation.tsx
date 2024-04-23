import { useEffect, useState } from "react";
import { useProgress } from "../../context/ProgressContext";
import { useLocation } from "react-router-dom";
import ReservationConfirmation from "../../components/ReservationConfirmation/ReservationConfirmation";

const Reservation = () => {
  const { setReservationProgress } = useProgress();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const location = useLocation();

  useEffect(() => {
    setReservationProgress(90);
    const { state } = location;
    if (state) {
      setSelectedDate(state.selectedDate);
      setSelectedTimeslot(state.selectedTimeslot);
    }
  }, [setReservationProgress, location]);

  return (
    <>
      <ReservationConfirmation
        selectedDate={selectedDate}
        selectedTimeslot={selectedTimeslot}
      />
    </>
  );
};

export default Reservation;
