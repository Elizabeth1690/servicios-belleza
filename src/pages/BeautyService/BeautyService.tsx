// BeautyService.js
import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import ServiceList from "../../components/ServiceList/ServiceList";
import { services } from "../../data/servicesData";

const BeautyService = () => {
  const { setBeautyServiceProgress } = useProgress();

  useEffect(() => {
    setBeautyServiceProgress(10);
  }, [setBeautyServiceProgress]);

  return (
    <div>
      <ServiceList services={services} />
    </div>
  );
};

export default BeautyService;
