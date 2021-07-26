const UserService = require('./UserService')

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body, req.files.picture)
            res.status(201).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const users = await UserService.getAll()
            res.status(200).json(users)
        } catch (e) {
            res.status(500).json(e)
        }

    }
    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(404).json({ message: 'pls enter ID' })
            }
            const user = await UserService.getOne(id)
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const user = req.body
            if (!user._id) {
                res.status(404).json({ message: 'pls enter ID' })
            }
            const updatedUser = await UserService.update(user)
            res.status(200).json(updatedUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(404).json({ message: 'incorrect ID' })
            }
            const user = await UserService.delete(id)
            res.status(200).json({ message: `user ${user.name} was deleted` })
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new UserController()