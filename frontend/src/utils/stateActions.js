import { updatePeriod, updateSubject, updateGrade } from "./structureHelpers";

export function addPeriod(periods) {
  const newPeriod = {
    id: Date.now(),
    name: `Novo período`,
    subjects: [],
  };

  return [...periods, newPeriod];
}

export function renamePeriod(periods, periodId, newName) {
  return updatePeriod(periods, periodId, (period) => ({
    ...period,
    name: newName,
  }));
}

export function removePeriod(periods, periodId) {
  return periods.filter((period) => period.id !== periodId);
}

export function addSubject(periods, periodId) {
  const newSubject = {
    id: Date.now(),
    name: "Nova matéria",
    grades: [],
    credits: 4,
    includeInMc: true,
  };

  return updatePeriod(periods, periodId, (period) => ({
    ...period,
    subjects: [...period.subjects, newSubject],
  }));
}

export function renameSubject(periods, periodId, subjectId, newName) {
  return updateSubject(periods, periodId, subjectId, (subject) => ({
    ...subject,
    name: newName,
  }));
}

export function removeSubject(periods, periodId, subjectId) {
  return updatePeriod(periods, periodId, (period) => ({
    ...period,
    subjects: period.subjects.filter((subject) => subject.id !== subjectId),
  }));
}

export function changeCreditsSubject(
  periods,
  periodId,
  subjectId,
  newCreditHours,
) {
  return updateSubject(periods, periodId, subjectId, (subject) => ({
    ...subject,
    creditHours: newCreditHours,
  }));
}

export function toggleIncludeInMcSubject(periods, periodId, subjectId) {
  return updateSubject(periods, periodId, subjectId, (subject) => ({
    ...subject,
    includeInMc: !subject.includeInMc,
  }));
}

export function addGrade(periods, periodId, subjectId) {
  const newGrade = {
    id: Date.now(),
    name: "Nova nota",
    value: 0.0,
    weight: 1.0,
  };

  return updateSubject(periods, periodId, subjectId, (subject) => ({
    ...subject,
    grades: [...subject.grades, newGrade],
  }));
}

export function renameGrade(periods, periodId, subjectId, gradeId, newName) {
  return updateGrade(periods, periodId, subjectId, gradeId, (grade) => ({
    ...grade,
    name: newName,
  }));
}

export function changeGradeValue(
  periods,
  periodId,
  subjectId,
  gradeId,
  newValue,
) {
  return updateGrade(periods, periodId, subjectId, gradeId, (grade) => ({
    ...grade,
    value: newValue,
  }));
}

export function changeGradeWeight(
  periods,
  periodId,
  subjectId,
  gradeId,
  newWeight,
) {
  return updateGrade(periods, periodId, subjectId, gradeId, (grade) => ({
    ...grade,
    weight: newWeight,
  }));
}

export function removeGrade(periods, periodId, subjectId, gradeId) {
  return updateSubject(periods, periodId, subjectId, (subject) => ({
    ...subject,
    grades: subject.grades.filter((grade) => grade.id !== gradeId),
  }));
}
