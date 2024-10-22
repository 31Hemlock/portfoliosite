
import React from "react";
import { simpleServices } from "../modules/MFSBackend";

import { ServiceItem } from "./ServiceItem"

interface ServiceMenuProps {
  activeService: string;
  setActiveService: React.Dispatch<React.SetStateAction<string>>
};

export const ServiceMenu: React.FC<ServiceMenuProps> = ({activeService, setActiveService}) => {
  
  return (
    <div className="flex justify-center">
      <div className={`grid grid-rows-2 grid-cols-5 3xl:grid-rows-1 3xl:grid-cols-10 text-center mx-auto gap-1 sm:gap-2 items-center`}>
        {Object.entries(simpleServices).map(([serviceName, serviceData]) => {
          return (
            <ServiceItem
              key={serviceName}
              name={serviceName}
              url={serviceData.url}
              color={serviceData.color}
              active={activeService === serviceName}
              setActiveService={setActiveService}
            />
          );
        })}
      </div>
    </div>
  )
}