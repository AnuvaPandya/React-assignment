import Items from "./Items";

const CategoryList = (props) => {
  return (
    <div>
      <div
        style={{
          border: "1px solid cyan",
          borderSpacing: "5px",
          //   margin: "1rem auto",
        }}
      >
        <b>{props.categoryName}</b>
      </div>
      {props.data
        .filter((item) => item.category == props.categoryName)
        .filter((item) => item.name.toLowerCase().includes(props.store))
        .filter((item) => {
          if (props.includes == false) {
            return true;
          }
          if (props.includes == true) {
            return item.stocked == true;
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
