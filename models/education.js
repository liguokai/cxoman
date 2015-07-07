/**
 *
 * Created by liguokai on 15-7-8.
 */

var mongoose = require('mongoose');

var educationSchema = mongoose.Schema(
    {
        school: String,
        academicDegree: String,
        start: Date,
        end: Date,
        major: String,
        user_id: Schema.Types.ObjectId //belongs to user model
    }
);

exports.schema = mongoose.model('education', educationSchema);
exports.name = 'education';