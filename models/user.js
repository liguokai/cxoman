var mongoose = require('mongoose');

var userSchema = mongoose.Schema(
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
        privacy: [Schema.Types.ObjectId] //companies
    }
);

exports.schema = mongoose.model('user', userSchema);
exports.name = 'user';