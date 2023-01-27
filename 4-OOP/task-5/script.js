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
const developer = new Developer('Amet', '17', 'trainner')

developer.LearnNewTechnology('JavaScript');
console.log(developer)
