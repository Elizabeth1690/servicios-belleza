import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Service } from "../../data/servicesData";
import { Link } from "react-router-dom";

interface ServiceCategoryProps {
  service: Service;
}

const SelectCategory: React.FC<ServiceCategoryProps> = ({ service }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const [clickSelect, setClickSelect] = useState<boolean>(false);

  const handleSelect: () => void = () => setClickSelect(true);

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className="m-2 space-y-2">
        <div
          className="group flex flex-col gap-2 rounded-lg   p-5 "
          tabIndex={1}
        >
          <div
            className=" bg-colorselect flex cursor-pointer items-center justify-between"
            onClick={() => toggleAccordion(1)}
          >
            <span className="text-colortext font-medium">
              {service.category}
            </span>
            <FontAwesomeIcon
              icon={openAccordion === 1 ? faMinus : faPlus}
              className="h-6 "
              color="#778795"
            />
          </div>
          <div
            className={` transition-all overflow-hidden ${
              openAccordion === 1
                ? "max-h-screen opacity-100 duration-1000"
                : "max-h-0 opacity-0"
            }`}
          >
            <div style={{ flexDirection: "column" }}>
              <div className="text-colortext">{service.name}</div>
              <div className="text-colortext">{service.description}</div>
              {clickSelect ? (
                <button className="bg-colorbtndark text-white">
                  seleccionado
                </button>
              ) : (
                <button
                  className="bg-colorbtnclear text-white "
                  onClick={handleSelect}
                >
                  seleccionar
                </button>
              )}
              {clickSelect && (
                <Link to="/horarios">
                  <button className="bg-colorbtndark"></button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
