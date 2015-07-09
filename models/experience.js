'use strict';
/**
 * Created by liguokai on 15-7-8.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var experienceSchema = new Schema(
    {
        company: String,
        position: String,
        start: Date,
        end: Date,
        projectName: String,
        projectScale: Number, //how many people in the projects
        description: String,
        user: { type: Schema.Types.ObjectId, ref: 'User'} //belongs to user model
    }
);

exports.schema = mongoose.model('Experience', experienceSchema);
exports.name = 'Experience';
