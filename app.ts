const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use('/api/auth',require('./routes/auth-routes'))
const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUrl'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit()
    }
}

start()
app.listen(PORT, () => console.log(`App has been started ${PORT}....`))
