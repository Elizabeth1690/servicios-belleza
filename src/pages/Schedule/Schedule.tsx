// Schedule.js
import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import ButtonSchedules from "../../components/ButtonSchedules/ButtonSchedules";

const Schedule = () => {
  const { setScheduleProgress } = useProgress();

  useEffect(() => {
    setScheduleProgress(70);
  }, [setScheduleProgress]);

  return (
    <>
      <ButtonSchedules />
    </>
  );
};

export default Schedule;
