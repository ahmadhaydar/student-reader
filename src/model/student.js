// get exported vaiables form db.js
const db = require('./db');
const mongoose = db.mongoose;
const studentSchema = mongoose.Schema({
    npm: String,
    nama: String
    });
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;