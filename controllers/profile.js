'use strict';
/**
 * Created by liguokai on 15-7-18.
 */
var User = MODEL('User').schema;
exports.install = function () {
    //user's profile routes
    F.route("/profile/", view_profile, ['get', 'authorize']);
    F.route("/profile/edit", edit_profile_page, ['get', 'authorize']);
    F.route("/profile/update", update_profile, ['post', 'authorize']);
};
/*
 View user Profile
 */
function view_profile() {
    var self = this;
    //get the current login user
    var currentUser = self.user;
    //populate the user related information
    User.findById(currentUser._id, function (err, user) {
        if (err) {
            //TODO handle error
            console.log(err);
        }
        //populate the user related information
        user.populate('education experience', function (err, userProfile) {
            if (err) {
                //TODO handle error
                console.log(err);
            }
            console.log(userProfile);
            self.view('edit', userProfile);
        });
    });
}

/*
 Edit user profile page
 */
function edit_profile_page() {
    var self = this;
    //get the current login user
    var currentUser = self.user;
    //TODO validation
    User.findById(currentUser._id, function (err, user) {
        if (err) {
            //TODO handle error
            console.log(err);
        }
        //populate the user related information
        user.populate('education experience', function (err, userProfile) {
            if (err) {
                //TODO handle error
                console.log(err);
            }
            console.log(userProfile);
            self.view('edit', userProfile);
        });
    });

}


/*
 Update profile
 */
function update_profile() {
    var self = this;
    var currentUser = self.user;
    var params = self.req.body;
    var resource = function (name) {
        return self.resource('cn', name);
    };
    var errorBuilder = new builders.ErrorBuilder(resource);
    console.log(params);
    User.findById(currentUser._id, function (err, user) {
        paramObjectMapping(params, user);


        console.log(user);
        user.save(function (err, savedUser, numberAffected) {
            if (err) {
                //TODO error handling
                errorBuilder.push('unexpected error', '@');
                return self.json(errorBuilder);
            }


            return self.json({r: true});
        });
    });

}
/* params to object mapping util function */
function paramObjectMapping(params, obj) {
    Object.keys(params).forEach(function (key) {
        obj[key] = params[key];
    });
    return obj;
}