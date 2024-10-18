let studentGrades = [
    ["John Doe"],
    [90, 97, 86, 85, 98],
    ["Pass"]
];

studentGrades.push(
    ["Juan Dela Cruz"],
    [0, 75, 79, 78, 74], 
    ["Pass"]
);
for(let i= 0; i<studentGrades.length;i++){
	console.log(studentGrades[i])
};
let updatedStudentGrades = studentGrades.map((grades, index) => {
    if (index % 3 === 1) {
        let sum = grades.reduce((acc, grade) => acc + grade, 0);
        let average = sum / grades.length;
        let status = average < 70 ? "Fail" : "Pass";
        return [studentGrades[index - 1][0], average, status];
    }
    return null;
}).filter(Boolean);

updatedStudentGrades.forEach(student => {
    console.log(`Average for: ${student[0]} is ${student[1]}, Status: ${student[2]}`);
});
