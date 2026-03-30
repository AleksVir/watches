import "./App.css";
import "./main.css";
import "./components/Molecules/form/form.css";

import TimePanel from "./components/TimePanel";

const fakeData = {
  type: "time-panel",
  titleTime: "Название",
  titleZone: "Временная зона",
  text: "Добавить",
};

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">Мировые часы</h2>
      </header>
      <main>
        <TimePanel {...fakeData}></TimePanel>
      </main>
    </div>
  );
}

export default App;
