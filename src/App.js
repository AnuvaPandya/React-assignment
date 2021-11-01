import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div
      style={{
        margin: "8rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ItemList />
    </div>
  );
}

export default App;
