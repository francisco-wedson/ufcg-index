import { useState } from "react";
import SubjectCard from "./SubjectCard";

const PeriodCard = ({
  period,
  onRenamePeriod,
  onRemovePeriod,
  subjectActions,
  gradeActions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-zinc-900 inline-block border border-zinc-700 rounded-xl shadow-lg p-2 space-y-3">
      <input
        className=" border border-zinc-700 rounded-lg px-1 font-semibold text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        value={period.name}
        onChange={(e) => onRenamePeriod(period.id, e.target.value)}
      />
      <button
        className="px-1 rounded-lg hover:bg-blue-700 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "▲" : "▼"}
      </button>
      <button
        className="px-1 rounded-lg hover:bg-red-700 transition"
        onClick={() => onRemovePeriod(period.id)}
      >
        🗑️
      </button>
      {isOpen && (
        <div>
          <div className="flex flex-wrap gap-1">
            {period.subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                onRenameSubject={subjectActions.rename}
                onRemoveSubject={subjectActions.remove}
                onChangeCredits={subjectActions.changeCredits}
                onToggleIncludeInMc={subjectActions.toggleIncludeInMc}
                gradeActions={gradeActions}
                periodId={period.id}
              />
            ))}
          </div>
          <div>
            <button
              className="px-1 rounded-lg border border-blue-500 hover:bg-blue-500/10 transition"
              onClick={() => subjectActions.add(period.id)}
            >
              Adicionar matéria
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PeriodCard;
