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
    <div>
      <input
        type="text"
        value={subject.name}
        onChange={(e) => onRenameSubject(periodId, subject.id, e.target.value)}
      />
      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        Mostrar
      </button>
      <button onClick={() => onRemoveSubject(periodId, subject.id)}>
        Remover
      </button>
      <input value={"Créditos"} readOnly />
      <input
        type="number"
        value={subject.credits}
        onChange={(e) =>
          onChangeCredits(periodId, subject.id, Number(e.target.value))
        }
        step="1"
      />
      <button onClick={() => onToggleIncludeInMc(periodId, subject.id)}>
        {subject.includeInMc ? "Remover do MC" : "Incluir no MC"}
      </button>
      {isOpen && (
        <div>
          <input value={""} readOnly />
          <input value={"Nota"} readOnly />
          <input value={"Peso"} readOnly />
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
            <button onClick={() => gradeActions.add(periodId, subject.id)}>
              +
            </button>
          </div>
          <p style={{ fontSize: "0.8rem" }}>
            Média {subject.name}:{" "}
            {calculeSubjectAverage(subject.grades).toFixed(1)}
          </p>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
