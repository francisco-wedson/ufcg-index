const GradeCard = ({
  grade,
  onRemoveGrade,
  onRenameGrade,
  onChangeWeight,
  onChangeValue,
  subjectId,
  periodId,
}) => {
  return (
    <div>
      <input
        type="text"
        value={grade.name}
        onChange={(e) =>
          onRenameGrade(periodId, subjectId, grade.id, e.target.value)
        }
      />
      <input
        type="number"
        value={grade.value}
        onChange={(e) =>
          onChangeValue(periodId, subjectId, grade.id, Number(e.target.value))
        }
        step="0.1"
        min="0"
        max="10"
      />
      <input
        type="number"
        value={grade.weight}
        onChange={(e) =>
          onChangeWeight(periodId, subjectId, grade.id, Number(e.target.value))
        }
        step="0.1"
        min="0.0"
        max="1.0"
      />
      <button onClick={() => onRemoveGrade(periodId, subjectId, grade.id)}>
        -
      </button>
    </div>
  );
};

export default GradeCard;
