var mongoose = require('mongoose');


// > db.users.find({"email":"sumit@gmail.com","password":"123"})
// > db.users.find({"email":"sumit@gmail.com","password":"sumit"})
// { "_id" : ObjectId("5ba705d584f9a60362894753"), "email" : "sumit@gmail.com", "password" : "sumit" }

var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    name: String,
    password: String,
    picture: String,
    isSeller: { type: Boolean, default: false },
    address: {
        addr1: String,
        addr2: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    created: { type: Date, default: Date.now }
})


module.exports = mongoose.model('User', userSchema);
