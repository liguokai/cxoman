'use strict';
/**
 * Created by guli on 2015/8/24.
 */
var Education = MODEL('Education').schema;
var user = MODEL('User').schema;

exports.intstall = function () {
    //user's education routes
    F.route("/education/add", new_education, ['post', 'authorize']);
};

/*
 Add a new education record
 */
function new_education() {
    var self = this;
    //get the current login user
    var currentUser = self.user;
    var resource = function (name) {
        return self.resource('cn', name);
    };

    //save new education
    var education = new Education();
    paramObjectMapping(self.req.body, education);
    //check whether 'present' is set
    var end_present = self.req.body.edu_present;
    if (!utils.isEmpty(end_present)) {
        education.end = end_present;
    }
    var errorBuilder = new builders.ErrorBuilder(resource);
    //validate the inputs
    if (Utils.validate(education, ['edu_school', 'edu_degree', 'edu_start', 'edu_end', 'edu_major'], onValidation, errorBuilder)) {
        self.json(errorBuilder);
        return;
    }

    education.save(function (err, savedEducation) {
        if (err) {
            errorBuilder.push('database error', '@');
            LOG(err);
            self.json(errorBuilder);
            //TODO more fancy error handling
            return;
        }
        //return saved object
        return savedEducation;
    });

}


/*
 Custom validation logic
 */
function onValidation(name, value) {
    switch (name) {
        case 'school':
            return utils.isEmpty(value);
        case 'degree':
            return utils.isEmpty(value);
        case 'start':
            return utils.isEmpty(value);
        case 'end':
            return utils.isEmpty(value);
        case 'major':
            return utils.isEmpty(value);
    }
}

/* params to object mapping util function */
function paramObjectMapping(params, obj) {
    Object.keys(obj).forEach(function (key) {
        obj[key] = params['edu_' + key];
    });
    return obj;
}