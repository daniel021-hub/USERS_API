const Users = require('../models/users.model')

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
    const users = await Users.findAll()
    return users
}

const findUserById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
        }
    })
    return data
}

const createUser = async (userObj) => {
    const newUser = await Users.create({
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            email: userObj.email,
            password: userObj.password
    })
    return newUser
}

const updateUser = async(id, userObj) => {

    const selectedUser = await Users.findOne({
        where: {
            id: id
        }
    })

    if(!selectedUser) return null

    const modifiedUser = await selectedUser.update(userObj)
    return modifiedUser //* => [1] [0]
}

const deleteUser = async(id) => {
    const user = Users.destroy({
        where: {
            id: id
        }
    })
    return user //* => [1] [0]
}

module.exports = {
    findAllUsers,
    findUserById,
    createUser,
    updateUser,
    deleteUser
}