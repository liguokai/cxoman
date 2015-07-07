/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var invitationSchema = new Schema(
    {
        requestTime: Date,
        responseTime: Date,
        user: { type: Schema.Types.ObjectId, ref: 'User'},
        jobDescription: { type: Schema.Types.ObjectId, ref: 'JobDescription'},
        status: {type: Number, min: 0, max: 2} //0: Pending, 1: Accepted, 2: Rejected
    }
);

exports.schema = mongoose.model('Invitation', invitationSchema);
exports.name = 'Invitation';