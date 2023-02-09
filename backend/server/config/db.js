const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then((res) => { console.log('mongodb connected---', res.connection.host) })
        .catch((err) => console.log(err))

}

module.exports = connectDB