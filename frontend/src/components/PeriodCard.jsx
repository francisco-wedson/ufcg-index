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
    <div>
      <input
        type="text"
        value={period.name}
        onChange={(e) => onRenamePeriod(period.id, e.target.value)}
      />
      <button
        onClick={() => {
          isOpen ? setIsOpen(false) : setIsOpen(true);
        }}
      >
        Mostrar
      </button>
      <button onClick={() => onRemovePeriod(period.id)}>Remover</button>
      {isOpen && (
        <div>
          {period.subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onRenameSubject={subjectActions.rename}
              onRemoveSubject={subjectActions.remove}
              gradeActions={gradeActions}
              periodId={period.id}
            />
          ))}
          <button onClick={() => subjectActions.add(period.id)}>
            Adicionar matéria
          </button>
        </div>
      )}
    </div>
  );
};

export default PeriodCard;
