const handleObjects = (obj, key, action) => {
    switch(action) {
        case 'get':
            return obj[key];
        case 'delete':
            delete obj[key]
            return obj
        case 'add': 
            obj[key] = 'rust';
            return obj;
        default:
            return obj
    }
}
const student = {
    name: 'Maxim',
    programmingLanguage: 'Javascript',
}


const result = handleObjects(student, 'programmingLanguage', 'get')
console.log(result)