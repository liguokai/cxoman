/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var jobDescriptionSchema = mongoose.Schema(
    {
        name: String,
        description: String,
        salary: String,
        publishDate: Date,
        validDate: Date,
        company_id: Schema.Types.ObjectId //belongs to company
    }
);

exports.schema = mongoose.model('jobDescription', jobDescriptionSchema);
exports.name = 'jobDescription';
