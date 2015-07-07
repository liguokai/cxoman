/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var jobDescriptionSchema = new Schema(
    {
        name: String,
        description: String,
        salary: String,
        publishDate: Date,
        validDate: Date,
        company: { type: Schema.Types.ObjectId, ref: 'Company'} //belongs to company
    }
);

exports.schema = mongoose.model('JobDescription', jobDescriptionSchema);
exports.name = 'JobDescription';
