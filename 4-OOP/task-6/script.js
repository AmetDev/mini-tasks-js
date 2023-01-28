class Dictionary {
    #name
    #words
    constructor(name) {
        this.#name = name;
        this.#words = {}

    };
    get mainName() {
        return this.#name
    };
    set setMainName(name) {
        this.#name = name;
    };
    get allWords() {
        return this.#words;
    };
    addNewWord(word) {this.#words[word]={word}};

    add(word = '', description = '') {
        if (!this.#words[word]) {
            this.#words[word] = {
                word,
                description,
            }
        }
    };
    remove(word) {
        delete  this.#words[word]
    };
    get(word) {
        return this.#words[word]
    };
    showAllWords() {
        Object.values(this.#words).forEach((element) => {
            console.log(element.word + "-" + element.description)
        });
    };
};

class HardWordsDictionary extends Dictionary {
    constructor(mainName) {
        super(mainName)
    };
    add(word = '', description = '') {
        if (!this.allWords[word]) {
            this.allWords[word] = {
                word,
                description,
                isDifficult: true,
            }
        }    
    };
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');
hardWordsDictionary.showAllWords();

console.log(hardWordsDictionary.mainName);
hardWordsDictionary.setMainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName);
console.log(hardWordsDictionary.allWords);

// const dictionary = new Dictionary('Java', 'Number')
// dictionary.add('Web-developer', 'this Software Enginner make a web-sites')
// dictionary.add('game-developer', 'he make a games')
// dictionary.remove('game-developer')
// dictionary.showAllWords()