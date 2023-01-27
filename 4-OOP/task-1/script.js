class Student {
    constructor(name, age, technologies, status) {
        this.name = name;
        this.age = age;
        this.technologies = technologies;
        this.status = status;
    }
    setTechnologies(technologies) { [
        this.technologies = technologies
    ]
    }
    setNewStatus(newStatus) {
        this.status = newStatus;
    }
}

const student = new Student ('Maxim', 24,'GULP');
student.setTechnologies(['javascript', 'CSS', 'HTML']);
student.setNewStatus('Middle');
console.log(student);