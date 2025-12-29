const studentsMarks = [{
        student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    },
    {
        student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
    }
];

const averageMarks = studentsMarks.map(studentObj => {
    const key = Object.keys(studentObj)[0]; // student1, student2...
    const marks = Object.values(studentObj[key]);
    const avg = marks.reduce((a, b) => a + b, 0) / marks.length;
    return {
        [key]: { average: avg } };
});

console.log(averageMarks);
/*
[
  { student1: { average: 64.2 } },
  { student2: { average: 64.2 } },
  { student3: { average: 64.2 } }
]
*/