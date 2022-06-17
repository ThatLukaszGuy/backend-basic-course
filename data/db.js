const mongoose = require('mongoose')

const dbStart = () => {
    
    const connectionURI = `mongodb+srv://${process.env.MONGO}@mongoose-course.1jewq.mongodb.net/?retryWrites=true&w=majority`
    mongoose
        .connect(connectionURI)
        .then(() => console.log('Database connected !'))
        .catch((err) => console.log(`Can't connect to Database, Error: ${err}`))

}



module.exports = dbStart