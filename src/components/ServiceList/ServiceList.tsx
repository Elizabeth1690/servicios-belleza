import React from "react";
import { Service } from "../../data/servicesData";
import SelectCategory from "../SelectCategory/SelectCategory";

interface ServiceListProps {
  services: Service[];
}

const ServiceList: React.FC<ServiceListProps> = ({ services }) => {
  return (
    <div className="">
      <h2>Categorias</h2>
      {services.map((service) => (
        <SelectCategory key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceList;
