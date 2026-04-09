import { useState } from "react";

const SubjectCard = ({
  subject,
  onRenameSubject,
  onRemoveSubject,
  onAddGrade,
  periodId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={subject.name}
        onChange={(e) => onRenameSubject(subject.id, e.target.value, periodId)}
      />
      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        Mostrar
      </button>
      <button onClick={() => onRemoveSubject(subject.id, periodId)}>
        Remover
      </button>
    </div>
  );
};

export default SubjectCard;
