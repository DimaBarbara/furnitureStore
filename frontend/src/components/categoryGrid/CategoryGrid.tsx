import categoriesData from "../../data/categoryGridData";
import ItemGrid from "./ItemGrid";

const CategoryGrid = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        {categoriesData.map((item, index) => {
          const reverseOrder = index === 2 || index === 3;
          return (
            <div key={item.id} className="">
              <ItemGrid data={item} reverseOrder={reverseOrder} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryGrid;
