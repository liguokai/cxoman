'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema(
    {
        //common user information
        name: String,
        password: String,
        email: String,
        mobile: String,
        gender: String,
        avatar: String,
        userType: Number, //1:user, 2:company
        status: { type: Number, default: 0 },//0:pending, 1:verified
        //user specified information
        country: String,
        academicDegree: String,
        workingYear: String,
        birthday: Date,
        skills: [String],
        currentProvince: String,
        currentCity: String,
        desiredProvince: String,
        desiredCity: String,
        summary: String,
        currentSalary: String,
        desiredSalary: String,
        auctionStatus: Number, //0: inactive, 1: active
        privacy: [String], //list of companies' domains
        //company specified information
        companyProvince: String,
        companyCity: String,
        companyDescription: String,
        companyScale: String,
        companyWebsite: String,
        companyIndustry: String,
        companyLogo: String,
        companyAllowance: String,
        companyPictures: [String]
    }
);


exports.schema = mongoose.model('User', userSchema);
exports.name = 'User';