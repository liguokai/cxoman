/**
 * Created by liguokai on 15-7-11.
 */
'use strict';
F.onAuthorization = function(req, res, flags, callback) {

    var cookie = req.cookie(F.config.cookie);
    if (cookie === null || cookie.length < 10) {
        callback(false);
        return;
    }

    var obj = F.decrypt(cookie, 'user');

    if (obj === null || obj === '' || obj.ip !== req.ip) {
        callback(false);
        return;
    }

    var user = F.cache.read('user_' + obj.id);
    if (user !== null) {
        req.user = user;
        callback(true);
        return;
    }

    // find the user in database
    var User = MODEL('User').schema;
    User.findById(obj.id,  function (err, user) {
        if (err) {
            callback(false);
            return;
        }

        if (null === user) {
            callback(false);
            return;
        }

        F.cache.add('user_' + user._id, user, new Date().add('m', 60));
        return callback(true, user);
    });

};

