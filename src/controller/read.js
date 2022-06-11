// import student model
const Student = require('../model/student');

// read student through npm
exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findOne({npm: req.params.npm});
        res.send(student);
    }
    catch (err) {
        res.send({status: 'ERROR'});
    }
}

// export postStudent to be used in other files
module.exports = exports;