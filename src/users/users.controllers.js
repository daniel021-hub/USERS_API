const userDb = [
    {
        id: 1,
        name: 'Esteban',
        email: "daes021@hotmail.com",
        password: 'root'
    },
    {
        id:2,
        name: 'Juanjo',
        email: "juanjo01@hotmail.com",
        password: 'root'
    }
]
let userId = 3

const findAllUsers = async () => {
    return userDb
}

const findUserById = async (id) => {
    const user = userDb.find(user => user.id === id)
    return data
}

const createUser = async (userObj) => {
    const newUser = {
        id: userId++,
        name: userObj.name  || 'Anonymous',
        email: userObj.email || 'example@example.com',
        password: userObj.password || 'root'
    }
    userDb.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser
}