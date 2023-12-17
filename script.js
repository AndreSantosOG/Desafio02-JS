let students = [
    {
        name:"Vinicius",
        gradeOne: 7,
        gradeTwo: 5,

    },
    {
        name:"Pedro Passolo",
        gradeOne: 9,
        gradeTwo: 5,
    },
    {
        name:"André",
        gradeOne: 8,
        gradeTwo: 9,
    },
    {
        name:"Pedro Augusto",
        gradeOne: 10,
        gradeTwo: 9,
    }
]

function average(gradeOne,gradeTwo) {
    return ((gradeOne + gradeTwo) / 2).toFixed(2)
}
function screenInformation(student) {
    if(average(student.gradeOne, student.gradeTwo) >= 7) {
        return `A média do(a) Aluna(a) ${student.name} foi: ${average(student.gradeOne, student.gradeTwo)},\nParabéns, ${student.name}, você foi aprovado(a) no concurso!
        `

    }else {
        return `A média do(a) Aluna(a) ${student.name} foi: ${average(student.gradeOne, student.gradeTwo)},\nNão foi dessa vez,${student.name}! Tente novamente!`
    }
}

for (let student of students) {
    let message = screenInformation(student)
    alert(message)
}