const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10,
    },
    {
        username:'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username:'Bob',
        status: 'online',
        lastActivity: 104
    }
]

const onlineUsers = users.filter((elements, index, array) => {
    if(elements.status  === 'online') {
        return elements
    }
})
let usersOnlineNames = []
onlineUsers.forEach((names) => {
    names = names.username;
    usersOnlineNames.push(names)
})
usersOnlineNames = usersOnlineNames.join(', ')
console.log(usersOnlineNames)
alert(`Сейчас онлайн следующие пользователи: ${usersOnlineNames}.`)



