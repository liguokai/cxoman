'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        name: String,
        gender: String,
        country: String,
        avatar: String,
        academicDegree: String,
        workingYear: String,
        birthday: Date,
        email: String,
        mobile: String,
        password: String,
        skills: [String],
        currentProvince: String,
        currentCity: String,
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