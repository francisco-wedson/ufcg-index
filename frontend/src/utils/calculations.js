export function calculeSubjectAverage(grades) {
  const totalWeight = grades.reduce((sum, grade) => sum + grade.weight, 0);

  if (totalWeight === 0) return 0;

  const weightedSum = grades.reduce(
    (sum, grade) => sum + grade.weight * grade.value,
    0,
  );

  return weightedSum / totalWeight;
}

function getMcTotalsFromSubjects(subjects) {
  const result = subjects.reduce(
    (totals, subject) => {
      if (!subject.includeInMc) return totals;

      return {
        totalSum:
          totals.totalSum +
          calculeSubjectAverage(subject.grades) * subject.credits,
        totalCredits: totals.totalCredits + subject.credits,
      };
    },
    { totalSum: 0, totalCredits: 0 },
  );

  return result;
}

export function calculeMc(periods) {
  const result = periods.reduce(
    (totals, period) => {
      const subjectTotals = getMcTotalsFromSubjects(period.subjects);
      return {
        totalSum: totals.totalSum + subjectTotals.totalSum,
        totalCredits: totals.totalCredits + subjectTotals.totalCredits,
      };
    },
    { totalSum: 0, totalCredits: 0 },
  );

  if (result.totalCredits === 0) return 0;

  return result.totalSum / result.totalCredits;
}
