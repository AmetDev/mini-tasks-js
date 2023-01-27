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
    }
}

const dictionary = new Dictionary('Java', 'Number')
dictionary.add('EXPRESS', 'NODEJS')
console.log(dictionary)

