
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// restaurant.js
const restaurantSchema = new Schema({
    name: String,
    kind: {type:String, enum: ["coffeeshop","library"]},
    description: String,
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    }
});

restaurantSchema.index({
    location: '2dsphere'
});


module.exports = mongoose.model('Restaurant', restaurantSchema);