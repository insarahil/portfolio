import { IService } from "@/type";
import React, { FunctionComponent } from "react";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { about, title, Icon },
}) => {
  const creatMarkup = () => {
    return { __html: about };
  };
  return (
    <div className="flex p-2 space-x-4 ite">
      <Icon className="w-12 h-12 text-green" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={creatMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
