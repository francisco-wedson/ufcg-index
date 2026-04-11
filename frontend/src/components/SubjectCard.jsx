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
          {subject.grades.map((grade) => (
            <GradeCard />
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
