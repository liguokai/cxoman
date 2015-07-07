var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        name: String,
        gender: String,
        academicDegree: String,
        workingYear: Number,
        email: String,
        country: String,
        province: String,
        city: String,
        mobile: String,
        password: String,
        skills: [String],
        currentLocation: String,
        desiredLocation: String,
        summary: String,
        currentSalary: String,
        desiredSalary: String,
        privacy: [{ type: Schema.Types.ObjectId, ref: 'Company'}] //companies
    }
);

exports.schema = mongoose.model('User', userSchema);
exports.name = 'User';