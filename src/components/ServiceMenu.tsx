
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
    <div className="flex justify-center w-full h-full">
      <div
        className="flex flex-wrap gap-2 text-center max-w-[500px] justify-center"
      >
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
  );
};
