let grade;

function getGrade(grade) {
    const gradeA = grade >= 90 && grade <= 100
    const gradeB = grade >= 80 && grade <= 89
    const gradeC = grade >= 70 && grade <= 79
    const gradeD = grade >= 60 && grade <= 69
    const gradeF = grade < 60 && grade >= 0
    
    if (gradeA) {
        grade = "A"
    } else if (gradeB) {
        grade = "B"
    } else if (gradeC) {
        grade = "C"
    } else if (gradeD) {
        grade = "D"
    } else if (gradeF) {
        grade = "F"
    } else {
        grade = "Nota inválida"
    }
    console.log(grade)
}

getGrade(102)
getGrade(100)
getGrade(89)
getGrade(79)
getGrade(69)
getGrade(59)
getGrade(0)
getGrade()
getGrade(-1)
