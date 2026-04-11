export function updatePeriod(periods, periodId, callback) {
  return periods.map((period) =>
    period.id === periodId ? callback(period) : period,
  );
}

export function updateSubject(periods, periodId, subjectId, callback) {
  return periods.map((period) =>
    period.id === periodId
      ? {
          ...period,
          subjects: period.subjects.map((subject) =>
            subject.id === subjectId ? callback(subject) : subject,
          ),
        }
      : period,
  );
}

export function updateGrade(periods, periodId, subjectId, gradeId, callback) {
  return periods.map((period) =>
    period.id === periodId
      ? {
          ...period,
          subjects: period.subjects.map((subject) =>
            subject.id === subjectId
              ? {
                  ...subject,
                  grades: subject.grades.map((grade) =>
                    grade.id === gradeId ? callback(grade) : grade,
                  ),
                }
              : subject,
          ),
        }
      : period,
  );
}
