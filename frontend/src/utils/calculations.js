export function calculeSubjectAverage(grades) {
  const totalWeight = grades.reduce((sum, grade) => sum + grade.weight, 0);

  if (totalWeight === 0) return 0;

  const weightedSum = grades.reduce(
    (sum, grade) => sum + grade.weight * grade.value,
    0,
  );

  return weightedSum / totalWeight;
}
