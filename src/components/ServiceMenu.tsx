
import React from "react";
import { simpleServices } from "../modules/MFSBackend";
import { ServiceItem } from "./ServiceItem"

interface ActiveServiceMenu {
  interactable: true;
  activeService: string;
  setActiveService: React.Dispatch<React.SetStateAction<string>>
}
interface StaticServiceMenu {
  interactable: false;
}
type ServiceMenuProps = ActiveServiceMenu | StaticServiceMenu;

export const ServiceMenu: React.FC<ServiceMenuProps> = (props) => { // No destructuring because of type discrimination union
  
  return (
    <div className="flex justify-center">
      <div className={`grid grid-rows-2 grid-cols-5 3xl:grid-rows-1 3xl:grid-cols-10 text-center mx-auto gap-1 sm:gap-2 items-center`}>
        {Object.entries(simpleServices).map(([serviceName, serviceData]) => {
          if (props.interactable) {
            return (
              <ServiceItem
                key={serviceName}
                name={serviceName}
                url={serviceData.url}
                color={serviceData.color}
                interactable={true}
                active={props.activeService === serviceName}
                setActiveService={props.setActiveService}
              />
            );
          } else {
            return (
              <ServiceItem
                interactable={false}
                key={serviceName}
                name={serviceName}
                url={serviceData.url}
                color={serviceData.color}
              />
            );
          }
        })}
      </div>
    </div>
  )
}