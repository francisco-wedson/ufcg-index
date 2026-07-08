import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import PeriodCard from "./components/PeriodCard";
import {
  addPeriod,
  renamePeriod,
  removePeriod,
  addSubject,
  renameSubject,
  removeSubject,
  changeCreditsSubject,
  toggleIncludeInMcSubject,
  addGrade,
  removeGrade,
  renameGrade,
  changeGradeValue,
  changeGradeWeight,
} from "./utils/stateActions";

function App() {
  const [periods, setPeriods] = useState([]);

  const periodActions = {
    add: () => setPeriods(addPeriod(periods)),
    rename: (periodId, newName) =>
      setPeriods(renamePeriod(periods, periodId, newName)),
    remove: (periodId) => setPeriods(removePeriod(periods, periodId)),
  };

  const subjectActions = {
    add: (periodId) => setPeriods(addSubject(periods, periodId)),
    rename: (periodId, subjectId, newName) =>
      setPeriods(renameSubject(periods, periodId, subjectId, newName)),
    remove: (periodId, subjectId) =>
      setPeriods(removeSubject(periods, periodId, subjectId)),
    changeCredits: (periodId, subjectId, newCredits) =>
      setPeriods(
        changeCreditsSubject(periods, periodId, subjectId, newCredits),
      ),
    toggleIncludeInMc: (periodId, subjectId) =>
      setPeriods(toggleIncludeInMcSubject(periods, periodId, subjectId)),
  };

  const gradeActions = {
    add: (periodId, subjectId) =>
      setPeriods(addGrade(periods, periodId, subjectId)),
    remove: (periodId, subjectId, gradeId) =>
      setPeriods(removeGrade(periods, periodId, subjectId, gradeId)),
    rename: (periodId, subjectId, gradeId, newName) =>
      setPeriods(renameGrade(periods, periodId, subjectId, gradeId, newName)),
    changeValue: (periodId, subjectId, gradeId, newValue) =>
      setPeriods(
        changeGradeValue(periods, periodId, subjectId, gradeId, newValue),
      ),
    changeWeight: (periodId, subjectId, gradeId, newWeight) =>
      setPeriods(
        changeGradeWeight(periods, periodId, subjectId, gradeId, newWeight),
      ),
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="min-h-screen max-w-5xl mx-auto">
        <Header periods={periods} />

        <div className="py-2 space-y-2">
          {periods.map((period) => (
            <PeriodCard
              key={period.id}
              period={period}
              onRenamePeriod={periodActions.rename}
              onRemovePeriod={periodActions.remove}
              subjectActions={subjectActions}
              gradeActions={gradeActions}
            />
          ))}
        </div>
        <div>
          <button onClick={periodActions.add}>Adicionar período</button>
        </div>
      </main>
    </div>
  );
}

export default App;
