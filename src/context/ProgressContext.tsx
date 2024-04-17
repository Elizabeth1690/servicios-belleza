import React, { createContext, useContext, useState, ReactNode } from "react";


interface ProgressContextType {
  beautyServiceProgress: number;
  setBeautyServiceProgress: React.Dispatch<React.SetStateAction<number>>;
  scheduleProgress: number;
  setScheduleProgress: React.Dispatch<React.SetStateAction<number>>;
  reservationProgress: number;
  setReservationProgress: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress debe ser usado dentro de un ProgressProvider");
  }
  return context;
};

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [beautyServiceProgress, setBeautyServiceProgress] = useState(0);
  const [scheduleProgress, setScheduleProgress] = useState(0);
  const [reservationProgress, setReservationProgress] = useState(0);

  return (
    <ProgressContext.Provider
      value={{
        beautyServiceProgress,
        setBeautyServiceProgress,
        scheduleProgress,
        setScheduleProgress,
        reservationProgress,
        setReservationProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};
