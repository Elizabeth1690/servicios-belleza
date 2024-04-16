import ServiceList from "../../components/ServiceList/ServiceList";
import { services } from "../../data/servicesData";

const BeautyService = () => {
  return (
    <div>
      <ServiceList services={services} />
    </div>
  );
};

export default BeautyService;
