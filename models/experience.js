/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var experienceSchema = mongoose.Schema(
    {
        company: String,
        position: String,
        start: Date,
        end: Date,
        projectName: String,
        projectScale: Number, //how many people in the projects
        description: String,
        user_id: Schema.Types.ObjectId //belongs to user model
    }
);

exports.schema = mongoose.model('experience', experienceSchema);
exports.name = 'experience';
