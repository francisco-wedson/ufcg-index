import { useState } from "react";
import GradeCard from "./GradeCard";
import { calculeSubjectAverage } from "../utils/calculations";

const SubjectCard = ({
  subject,
  onRenameSubject,
  onRemoveSubject,
  onChangeCredits,
  onToggleIncludeInMc,
  gradeActions,
  periodId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-2 space-y-3">
      <div className="flex items-center gap-2">
        <input
          className="flex-1 border border-zinc-600 rounded-lg px-1 font-semibold text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={subject.name}
          onChange={(e) =>
            onRenameSubject(periodId, subject.id, e.target.value)
          }
        />
        <button
          className="px-1 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "▲" : "▼"}
        </button>
        <button
          className="px-1 rounded-lg hover:bg-red-700 transition"
          onClick={() => onRemoveSubject(periodId, subject.id)}
        >
          🗑️
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="">Créditos:</span>
        <input
          className="w-12 border border-zinc-600 rounded px-1"
          type="number"
          value={subject.credits}
          onChange={(e) =>
            onChangeCredits(periodId, subject.id, Number(e.target.value))
          }
          step="1"
        />
        <button
          className={`w-22 rounded-lg text-sm border transition ${
            subject.includeInMc
              ? "bg-emerald-600 border-emerald-500 hover:bg-emerald-700"
              : "bg-zinc-700 border-zinc-600 hover:bg-zinc-600"
          }`}
          onClick={() => onToggleIncludeInMc(periodId, subject.id)}
        >
          {subject.includeInMc ? "Entra no MC" : "Fora do MC"}
        </button>
        <span className="text-sm">Média</span>
        <p className="rounded-lg font-bold">
          {calculeSubjectAverage(subject.grades).toFixed(1)}
        </p>
      </div>
      {isOpen && (
        <div>
          <div className="grid grid-cols-3 text-sm font-medium text-zinc-400">
            <span>Nome</span>
            <span>Nota</span>
            <span>Peso</span>
          </div>
          {subject.grades.map((grade) => (
            <GradeCard
              grade={grade}
              onRemoveGrade={gradeActions.remove}
              onRenameGrade={gradeActions.rename}
              onChangeWeight={gradeActions.changeWeight}
              onChangeValue={gradeActions.changeValue}
              subjectId={subject.id}
              periodId={periodId}
            />
          ))}
          <div>
            <button
              className="rounded-lg hover:bg-blue-500/20 transition"
              onClick={() => gradeActions.add(periodId, subject.id)}
            >
              + Adicionar nota
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
