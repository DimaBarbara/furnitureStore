import React from "react";
import type { CircleItem } from "../../types/data";

interface CircleProps {
  data: CircleItem[];
}

const Circle: React.FC<CircleProps> = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  return (
    <div className="flex w-full justify-start gap-4 py-4 bg-transparent text-start">
      {data.map((item, index) => (
        <div
          key={item.id || index}
          className="flex w-max items-center gap-2.5 rounded-lg shadow-md"
        >
          <div>
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
              <img src={item.svg} alt={item.title} className="h-7 w-auto" />
            </div>
          </div>
          <div className="w-auto">
            <h3 className="font-second font-semibold text-[21px] leading-[127%] tracking-[-0.02em] uppercase text-white !mb-0 text-start">
              {item.title}
            </h3>
            <p className="font-primary font-normal text-xs leading-[127%] tracking-[-0.04em] text-white text-start">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Circle;
