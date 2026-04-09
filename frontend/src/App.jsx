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

  const renamePeriod = (id, newName) => {
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
        ? { ...period, subjects: [...period.subjects, newSubject] }
        : period,
    );

    setPeriods(updatedPeriods);
  };

  const renameSubject = (subjectId, newName, periodId) => {
    const updatedPeriods = periods.map((period) =>
      period.id === periodId
        ? {
            ...period,
            subjects: period.subjects.map((subject) =>
              subject.id === subjectId
                ? { ...subject, name: newName }
                : subject,
            ),
          }
        : period,
    );

    setPeriods(updatedPeriods);
  };

  const removeSubject = (subjectId, periodId) => {
    const updatedPeriods = periods.map((period) =>
      period.id === periodId
        ? {
            ...period,
            subjects: period.subjects.filter(
              (subject) => subject.id !== subjectId,
            ),
          }
        : period,
    );

    setPeriods(updatedPeriods);
  };

  const addGrade = (subjectId, periodId) => {
    const newGrade = {
      id: Date.now(),
      name: "Nova nota",
      value: 0.0,
      weight: 1.0,
    };

    const updatedPeriods = periods.map((period) =>
      period.id === periodId
        ? {
            ...period,
            subjects: period.subjects.map((subject) =>
              subject.id === subjectId
                ? { ...subject, grades: [...subject.grades, newGrade] }
                : subject,
            ),
          }
        : period,
    );

    setPeriods(updatedPeriods);
  };

  const periodActions = {
    rename: renamePeriod,
    remove: removePeriod,
  };

  const subjectActions = {
    add: addSubject,
    rename: renameSubject,
    remove: removeSubject,
  };

  const gradeActions = {
    add: addGrade,
  };

  return (
    <>
      <Header />
      <button onClick={addPeriod}>Adicionar período</button>

      {periods.map((period) => (
        <PeriodCard
          key={period.id}
          period={period}
          periodActions={periodActions}
          subjectActions={subjectActions}
          gradeActions={gradeActions}
        />
      ))}
    </>
  );
}

export default App;
