/**
 * Created by liguokai on 15-7-11.
 */
'use strict';
framework.on('install', function (type, name) {
    if (type !== 'module')
        return;
    if (name != 'auth')
        return;
    var self = this;
    var auth = MODULE('auth');
    auth.onAuthorization = function (id, callback) {
        var User = MODEL('User').schema;
        var filter = function (user) {
            return user.id === id;
        };
        User.findById(filter, {}, function (err, user) {
            if (err) {
                callback(null);
                return;
            }

            if (null === user) {
                callback(null);
                return;
            }

            return callback(user);
        });
    };
});
