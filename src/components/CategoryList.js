import Items from "./Items";

const CategoryList = ({ categoryName, store, includes, data }) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid cyan",
          borderSpacing: "5px",
        }}
      >
        <b>{categoryName}</b>
      </div>
      {data
        .filter((item) => item.category == categoryName)
        .filter((item) => item.name.toLowerCase().includes(store))
        .filter((item) => {
          if (!includes) {
            return true;
          }
          if (includes) {
            return item.stocked;
          }
        })
        .map((item) => {
          return (
            <Items name={item.name} price={item.price} stocked={item.stocked} />
          );
        })}
    </div>
  );
};

export default CategoryList;
