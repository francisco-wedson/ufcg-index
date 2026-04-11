import { useState } from "react";
import GradeCard from "./GradeCard";

const SubjectCard = ({
  subject,
  onRenameSubject,
  onRemoveSubject,
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
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
