import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  let Bars = [2, 3, 50, 100];
  return (
    <div className="App">
      <h1>ProgressBar</h1>
      {Bars.map((val, i) => {
        return <ProgressBar process={val} key={i} />;
      })}
    </div>
  );
}
