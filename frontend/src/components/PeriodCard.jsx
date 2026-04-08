import { useState } from "react";

const PeriodCard = ({
  period,
  onUpdatePeriodName,
  onRemovePeriod,
  onAddSubject,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={period.name}
        onChange={(e) => onUpdatePeriodName(period.id, e.target.value)}
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
          <button onClick={() => onAddSubject(period.id)}>
            Adicionar matéria
          </button>
        </div>
      )}
    </div>
  );
};

export default PeriodCard;
