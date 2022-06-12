// import student model
const Student = require('../model/student');
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
// read student through npm
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findOne({npm: req.params.npm});
        res.json(student);
    }
    catch (err) {
        res.send({status: 'ERROR'});
    }
}

// export postStudent to be used in other files
module.exports = exports;