import { FC } from "react";
import { TaxonomyType } from "../../data/types";
import { Link } from "react-router-dom";

export interface CardCategory1Props {
  className?: string;
  taxonomy: TaxonomyType;
  size?: "large" | "normal";
}

const CardCategory1: FC<CardCategory1Props> = ({
  className = "",
  size = "normal",
  taxonomy,
}) => {
  const { count, name, href = "/", thumbnail } = taxonomy;
  return (
    <Link
      to={href}
      className={`nc-CardCategory1 flex items-center ${className}`}
    >
      <img
        alt=""
        className={`relative flex-shrink-0 ${
          size === "large" ? "w-20 h-20" : "w-12 h-12"
        } rounded-lg me-4 overflow-hidden`}
        src={thumbnail || ""}
        // className="object-cover"
        sizes="80px"
      />
      <div>
        <h2
          className={`${
            size === "large" ? "text-lg" : "text-base"
          } nc-card-title text-neutral-900 dark:text-neutral-100 text-sm sm:text-base font-medium sm:font-semibold`}
        >
          {name}
        </h2>
        <span
          className={`${
            size === "large" ? "text-sm" : "text-xs"
          } block mt-[2px] text-neutral-500 dark:text-neutral-400`}
        >
          {count} Articles
        </span>
      </div>
    </Link>
  );
};

export default CardCategory1;
