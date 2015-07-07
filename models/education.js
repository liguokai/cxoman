/**
 *
 * Created by liguokai on 15-7-8.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var educationSchema = new Schema(
    {
        school: String,
        academicDegree: String,
        start: Date,
        end: Date,
        major: String,
        user: { type: Schema.Types.ObjectId, ref: 'User'} //belongs to user model
    }
);

exports.schema = mongoose.model('Education', educationSchema);
exports.name = 'Education';