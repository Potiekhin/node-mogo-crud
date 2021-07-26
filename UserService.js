const UserModel = require('./UserModel')
const fileService = require('./fileService')

class UserService {
    async create(user, picture) {
        const fileName = fileService.saveFile(picture)
        const createUser = await UserModel.create({...user, picture: fileName})
        return createUser
    }
    async getAll() {
        const users = await UserModel.find()
        return users
    }
    async getOne(id) {
        const user = await UserModel.findById(id)
        return user

    }
    async update(user) {
        const updatedUser = await UserModel.findByIdAndUpdate(user._id, user, { new: true })
        return updatedUser
    }
    async delete(id) {
        const user = await UserModel.findByIdAndRemove(id)
        return user
    }
}

module.exports = new UserService