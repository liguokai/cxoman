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
        workYear: String, //define how many working years
        birthday: String,
        skills: String,
        currentProvince: String,
        currentCity: String,
        expectedProvince: String,
        expectedCity: String,
        summary: String,
        currentSalary: String,
        desiredPosition: String,
        desiredSalary: String,
        auctionStatus: Number, //0: inactive, 1: active
        privacy: String, //list of companies' domains
        educations: [{ type: Schema.Types.ObjectId, ref: 'Education' }],
        experiences: [{ type: Schema.Types.ObjectId, ref: 'Experience' }],
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