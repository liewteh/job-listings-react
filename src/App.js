import "./App.css";
import Header from "./components/Header";
import Jobs from "./components/Jobs";
import data from "./data.json";

const App = () => {
  return (
    <div>
      <Header />
      <Jobs data={data} />
    </div>
  );
};

export default App;