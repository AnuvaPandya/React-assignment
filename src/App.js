import "./App.css";
import Items from "./components/Items";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      {/* <List /> */}
      <Items name={"Football"} price={"$49.99"} category={"Sporting Gooods"} />
      <ItemList />
    </div>
  );
}

export default App;
