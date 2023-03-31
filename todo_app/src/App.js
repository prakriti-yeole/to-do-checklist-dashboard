import "./App.css";
import { Todos } from "./Components/Todo/Todos";

function App() {
  return (
    <div className="App">
      <div className="left_container">
        <Todos />
      </div>
      <div className="right_container">Kumar</div>
    </div>
  );
}

export default App;
