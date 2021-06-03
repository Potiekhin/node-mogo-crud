const express = require('express')
const mongoose = require('mongoose')
const router = require('./router.js')

const PORT = 7777
const DB_URL = 'mongodb+srv://root:root@test.imoqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'


const app = express()

app.use(express.json())
app.use('/api',router)

const start = async () => {
    try {
        await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))

    } catch (e) {
        console.log(e);
    }
}

start()