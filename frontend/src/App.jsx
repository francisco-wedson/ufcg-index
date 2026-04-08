import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import PeriodCard from "./components/PeriodCard";

function App() {
  const [periods, setPeriods] = useState([]);

  const addPeriod = () => {
    const newPeriod = {
      id: Date.now(),
      name: `Novo período`,
      subjects: [],
    };

    setPeriods([...periods, newPeriod]);
  };

  const updatePeriodName = (id, newName) => {
    const updatedPeriods = periods.map((period) =>
      period.id === id ? { ...period, name: newName } : period,
    );

    setPeriods(updatedPeriods);
  };

  const removePeriod = (id) => {
    const updatedPeriods = periods.filter((period) => period.id !== id);

    setPeriods(updatedPeriods);
  };

  const addSubject = (id) => {
    const newSubject = {
      id: Date.now(),
      name: "Nova matéria",
      grades: [],
    };

    const updatedPeriods = periods.map((period) =>
      period.id === id
        ? { ...period, subjects: [...period.subects, newSubject] }
        : period,
    );

    setPeriods(updatedPeriods);
  };

  return (
    <>
      <Header />
      <button onClick={addPeriod}>Adicionar período</button>

      {periods.map((period) => (
        <PeriodCard
          key={period.id}
          period={period}
          onUpdatePeriodName={updatePeriodName}
          onRemovePeriod={removePeriod}
          onAddSubject={addSubject}
        />
      ))}
    </>
  );
}

export default App;
