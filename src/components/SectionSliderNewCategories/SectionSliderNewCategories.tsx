import { FC } from "react";
import { TaxonomyType } from "../../data/types";
import CardCategory1 from "../CardCategory1/CardCategory1";
import CardCategory2 from "../CardCategory2/CardCategory2";
import CardCategory3 from "../CardCategory3/CardCategory3";
import CardCategory4 from "../CardCategory4/CardCategory4";
import CardCategory5 from "../CardCategory5/CardCategory5";
import Heading from "../Heading/Heading";
import MySlider from "../MySlider";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  heading: string;
  subHeading: string;
  categories: TaxonomyType[];
  categoryCardType?: "card1" | "card2" | "card3" | "card4" | "card5";
  itemPerRow?: 4 | 5;
}

const SectionSliderNewCategories: FC<SectionSliderNewCategoriesProps> = ({
  heading,
  subHeading,
  className = "",
  categories,
  itemPerRow = 5,
  categoryCardType = "card3",
}) => {
  const renderCard = (item: TaxonomyType, index: number) => {
    const topIndex = index < 3 ? `#${index + 1}` : undefined;
    switch (categoryCardType) {
      case "card1":
        return <CardCategory1 key={index} taxonomy={item} />;
      case "card2":
        return <CardCategory2 key={index} index={topIndex} taxonomy={item} />;
      case "card3":
        return <CardCategory3 key={index} taxonomy={item} />;
      case "card4":
        return <CardCategory4 key={index} index={topIndex} taxonomy={item} />;
      case "card5":
        return <CardCategory5 key={index} taxonomy={item} />;
      default:
        return null;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <Heading desc={subHeading}>{heading}</Heading>
      <MySlider
        data={categories}
        renderItem={(item, indx) => renderCard(item, indx)}
        itemPerRow={itemPerRow}
      />
    </div>
  );
};

export default SectionSliderNewCategories;
