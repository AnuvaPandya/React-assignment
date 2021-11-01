import "./App.css";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div
      style={{
        border: "2px solid sandybrown",
        borderSpacing: "15px 15px",
        margin: "1rem auto",
        padding: "20px",
      }}
    >
      <ItemList />
    </div>
  );
}

export default App;
