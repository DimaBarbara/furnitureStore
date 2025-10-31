import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { CategoryGridItem } from "../../types/data";
import TriangleRightIcon from "/svg/triangleRight.svg";
import TriangleLeftIcon from "/svg/triangleLeft.svg";

interface CardProps {
  data: CategoryGridItem;
  reverseOrder: boolean;
}

const ItemGrid: React.FC<CardProps> = ({ data, reverseOrder }) => {
  return (
    <div
      className={`group relative overflow-hidden 
                    flex ${reverseOrder ? "flex-row-reverse" : "flex-row"}`}
    >
      <div className=" relative w-[360px] h-[321px] overflow-hidden">
        <img
          src={data.imageUrl}
          alt={data.title}
          className="w-[360px] h-[321px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {reverseOrder ? (
          <img
            src={TriangleRightIcon}
            alt="GitHub Дмитро"
            className="h-7 w-auto absolute top-14 left-0"
          />
        ) : (
          <img
            src={TriangleLeftIcon}
            alt="GitHub Дмитро"
            className="h-7 w-auto absolute top-14 right-0"
          />
        )}
      </div>

      <div className="w-[360px] h-[321px] flex flex-col items-start justify-center text-start !p-8 bg-white">
        <h2 className="font-bold text-[24px] leading-[127%] tracking-[-0.02em] uppercase text-[#071828] !text-start">
          {data.title}
        </h2>
        <div>
          <p className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] text-[#071828] !mb-4">
            {data.description}
          </p>
          <p className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] text-[#004583] !mb-4">
            {data.availability}
          </p>
          <p className="font-normal text-[16px] leading-[127%] tracking-[-0.03em] text-[#071828] !mb-5">
            Ціни від: {data.price}
          </p>
        </div>
        <a
          href={data.linkUrl}
          aria-label={`Перейти до категорії ${data.title}`}
          className="w-14 h-14 rounded-full flex items-center justify-center border border-[#004583]
                     transition-all duration-300 ease-in-out
                     hover:bg-[#004583] hover:scale-110
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#004583] focus-visible:ring-offset-2"
        >
          {reverseOrder ? (
            <ArrowRight
              size={25}
              className="stroke-[#004583] hover:stroke-whit"
            />
          ) : (
            <ArrowLeft
              size={25}
              className="stroke-[#004583] hover:stroke-white"
            />
          )}
        </a>
      </div>
    </div>
  );
};

export default ItemGrid;
