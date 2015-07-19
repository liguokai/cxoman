'use strict';
/**
 * Created by liguokai on 15-7-18.
 */
var User = MODEL('User').schema;
exports.install = function () {
    //user profile routes
    F.route("/profile/", view_profile, ['get', 'authorize']);
    F.route("/profile/edit", edit_profile, ['get', 'authorize']);
};
/*
 View user Profile
 */
function view_profile() {
    var self = this;
    var auth = MODULE('auth');
    //get the current login user
    var currentUser = self.user;
    //populate the user related information
    currentUser.populate('education experience', function (err, userProfile) {
        if (err) {
            //TODO handle error
            console.log(err);
        }
        self.view('index', userProfile);
    });
}

/*
 Edit user profile page
 */
function edit_profile() {
    var self = this;
    var auth = MODULE('auth');
    //get the current login user
    var currentUser = self.user;
    //populate the user related information
    currentUser.populate('education experience', function (err, userProfile) {
        if (err) {
            //TODO handle error
            console.log(err);
        }
        self.view('edit', userProfile);
    });
}