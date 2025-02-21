function studentGrades(grades){
    let result = {
        "grades": [],
        "passed": 0,
        "lost": 0,
    }
    let gradesList = result.grades

    for(let i = 0; i<grades.length; i++) {
        if(grades[i] >= 90 && grades[i] <= 100) {
            gradesList.push("A");
            result.passed += 1
        } else if (grades[i] >= 80 && grades[i] <= 89) {
            gradesList.push("B")
            result.passed += 1

        } else if (grades[i] >= 70 && grades[i] <= 79) {
            gradesList.push("C")
            result.passed += 1
        } else if(grades[i] >= 60 && grades[i] <= 69) {
            gradesList.push("D")
            result.passed += 1
        } else if(grades[i] <= 59) {
            gradesList.push("F")
            result.lost += 1
        }

    }
    
    console.log(result);
}



studentGrades([100, 50, 65, 70, 85, 96, 45]);

// const studentGrades = [100, 50, 65, 70, 85, 96, 45];
// const result = computeGrades(studentGrades);
// console.log(result)

