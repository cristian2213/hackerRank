function gradingStudents(grades) {
  // Multiples 5,10,15...150
  let multiples = [];
  for (let i = 1; i <= 30; i++) {
    multiples.push(5 * i);
  }
  const grandingStudents = [];
  for (let i = 0; i < grades.length; i++) {
    // grades[i]=37 - multiple=m, so, 37 < m = 40
    const multiple = multiples.find((m) => grades[i] < m);
    const grade = grades[i];
    const operation = Math.abs(grade - multiple);
    // grades[i] < 38 = grades[i];
    if (grade < 38) {
      grandingStudents.push(grade);
      continue;
    }
    // |grades[i] - multiple| < 3 = multiple
    if (operation < 3) {
      grandingStudents.push(multiple);
      continue;
    }
    // |grades[i] - multiple| >= 3 = grades[i]
    if (operation > 2) grandingStudents.push(grade);
  }
  return grandingStudents;
}

const res = gradingStudents([73, 67, 38, 33]); // [75, 67, 40, 33];
console.log(res);
