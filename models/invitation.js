/**
 * Created by liguokai on 15-7-8.
 */
var mongoose = require('mongoose');
var invitationSchema = mongoose.Schema(
    {
        requestTime: Date,
        responseTime: Date,
        user_id: Schema.Types.ObjectId,
        jobDescription_id: Schema.Types.ObjectId,
        status: {type: Number, min: 0, max: 2} //0: Pending, 1: Accepted, 2: Rejected
    }
);

exports.schema = mongoose.model('invitation', invitationSchema);
exports.name = 'invitation';