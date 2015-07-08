var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        name: String,
        gender: String,
        avatar: String,
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
        auctionStatus: Number, //0: inactive, 1: active
        privacy: [String] //list of companies' domains
    }
);

exports.schema = mongoose.model('User', userSchema);
exports.name = 'User';