/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var companySchema = mongoose.Schema(
    {
        name: String,
        address: String,
        description: String,
        scale: String,
        website: String,
        industry: String,
        logo: String,
        allowance: String,
        pictures: [String],
        email: String,
        password: String
    }
);

exports.schema = mongoose.model('Company', companySchema);
exports.name = 'Company';