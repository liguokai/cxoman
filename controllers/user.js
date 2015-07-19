'use strict';
/**
 * Created by liguokai on 15-7-7.
 */
var crypto = require('crypto');

var User = MODEL('User').schema;

exports.install = function () {
    //sign in & sign up routes
    F.route("/user/signin/", signin_page, ['unauthorized']);
    F.route("/user/signin/", sign_in, ['xhr', 'post']);
    F.route("/user/signup/", signup_page, ['get']);
    F.route("/user/signup/", sign_up, ['xhr', 'post']);

};

/* user sign in page action */
function signin_page() {
    var self = this;
    self.view('signin');
}

/*user sign up page */
function signup_page() {
    var self = this;
    self.view("signup");
}

/* user sign in action */
function sign_in() {
    var self = this;
    var auth = MODULE('auth');
    //get post information
    var email = self.req.body.email;
    var password = self.req.body.password;

    var resource = function (name) {
        return self.resource('cn', name);
    };

    var errorBuilder = new builders.ErrorBuilder(resource);
    //validate the inputs
    if (Utils.validate(self.body, ['email', 'password'], onValidation, errorBuilder).hasError()) {
        self.json(errorBuilder);
        return;
    }
    //find users for the given email
    User.find({'email': email}, {}, function (err, users) {
        if (err) {
            errorBuilder.push('unexpected error', '@');
            self.json(errorBuilder);
            return;
        }
        if (users.length === 0) {
            //user is not found
            errorBuilder.push('email doesnot exsit', '@');
            self.json(errorBuilder);
            return;
        }
        if (users.length > 1) {
            //unexpected error
            errorBuilder('unexpected error', '@');
            self.json(errorBuilder);
            return;
        }
        //only one record hit
        var currentUser = users[0];
        var hash = crypto.createHash('sha256');
        if (currentUser.password !== hash.update(password).digest('hex')) {
            //password is wrong
            errorBuilder.push('password is wrong', '@');
            self.json(errorBuilder);
            return;
        }
        auth.login(self, currentUser._id, currentUser);
        return self.json({r: true});
    });
}

/* user register action */
function sign_up() {
    var self = this;
    var auth = MODULE('auth');
    //get post information
    var email = self.req.body.email;
    var password = self.req.body.password;

    var resource = function (name) {
        return self.resource('cn', name);
    };

    var errorBuilder = new builders.ErrorBuilder(resource);
    //validate the inputs
    if (Utils.validate(self.body, ['email', 'password'], onValidation, errorBuilder).hasError()) {
        self.json(errorBuilder);
        return;
    }
    User.find({'email': email}, {}, function (err, users) {
        if (err) {
            errorBuilder.push('unexpected error', '@');
            self.json(errorBuilder);
            return;
        }
        if (users.length > 0) {
            errorBuilder.push('email exists', '@');
            self.json(errorBuilder);
            return;
        }
        var user = new User();

        user.email = email;
        var hash = crypto.createHash('sha256');
        user.password = hash.update(password).digest('hex');
        user.save(function (err, savedUser) {
            if (err) {
                errorBuilder.push('unexpected error', '@');
                console.log(err);

                self.json(errorBuilder);
                return;
            }
            auth.login(self, savedUser._id, savedUser);
            self.json({r: true});
        });
    });
}


/*
 * custom validation logic
 */
function onValidation(name, value) {
    switch (name) {
        case 'email':
            return utils.isEmail(value);
        case 'password':
            if (value.length === 0) {
                return RESOURCE('cn', 'password is required');
            } else if (value.length < 6 || value.length > 20) {
                return RESOURCE('cn', 'password length should be 6 to 20 digits');
            }
    }
}
