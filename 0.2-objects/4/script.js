const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React']
}


const giveJobToStudents = (student, jobName) => {
    student.job = jobName
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);
    return student
}
const updatedStudent = giveJobToStudents(student, 'веб-разбраотчик')
console.log(updatedStudent)