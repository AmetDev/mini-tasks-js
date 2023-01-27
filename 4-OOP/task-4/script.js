class Dictionary {
    constructor(name) {
        this.name = name;
        this.words = {}

    };
    add(word = '', description = '') {
        this.words[word] = {
            word,
            description,
        }
    };
    remove(word) {
        delete  this.words[word]
    };
    get(word) {
        return this.words[word]
    };
    showAllWords() {
        Object.values(this.words).forEach((element) => {
            console.log(element.word + "-" + element.description)
        })
    }
}

const dictionary = new Dictionary('Java', 'Number')
dictionary.add('Web-developer', 'this Software Enginner make a web-sites')
dictionary.add('game-developer', 'he make a games')
dictionary.remove('game-developer')
dictionary.showAllWords()