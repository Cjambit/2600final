const mongoose = require('mongoose')

var Schema = mongoose.Schema

var publisherSchema = new Schema({
    name: { type: String, required: true, min: 10, max: 60 }
})

// Virtual URL
publisherSchema
    .virtual('url')
    .get(function() {
        return '/catalog/publisher/' + this._id
    })

//export model
module.exports = mongoose.model('Publisher', publisherSchema);