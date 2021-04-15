const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        password: { type: String, required: true },
        oldmocks: {type: Array, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('users', User)