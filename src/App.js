import "./App.css";
import EightBall from "./EightBall";
import answers from "./answers";

function App() {
  return (
    <div className="App">
      <EightBall list={answers} />
    </div>
  );
}

export default App;
