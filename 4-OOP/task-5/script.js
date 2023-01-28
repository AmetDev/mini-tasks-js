class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.techologies = []
    }
    code() {}
    LearnNewTechnology(techology) {
       this.techologies.push(techology)
    }
}


class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Junior')
        this.fullName = fullName;
        this.age = age;
        this.techologies = ['HTML', 'CSS', 'JavaScript'];
    };
    code() {
        console.log(`Junior разработчик пишет код...`)
    };

}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, 'Middle')
        this.fullName = fullName;
        this.age = age;
        this.techologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }
    code(){
        console.log("Middle разработчик пишет код...")
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName,age, 'Senior')
        this.fullName = fullName;
        this.age = age;
        this.techologies = ['HTML', 'CSS', 'JavaScript', 'React','NodeJS']
    }
    code() {
        console.log("Senior разработчик пишет код...")
    }
}


const juniordeveloper = new JuniorDeveloper('Аанастия', 20);
console.log(juniordeveloper.fullName, juniordeveloper.age, juniordeveloper.position);
juniordeveloper.code();

const middleDeveloper = new MiddleDeveloper('Игорь', 25);
console.log(middleDeveloper.fullName, middleDeveloper.age,middleDeveloper.position);
middleDeveloper.code();

const seniorDeveloper  = new SeniorDeveloper('Максим', 30);
console.log(seniorDeveloper.fullName, seniorDeveloper.age, seniorDeveloper.position)
seniorDeveloper.code()