'use strict';
exports.install = function() {
    F.route('/', view_index);
    F.route('#401', error401);
};

function view_index() {
    var self = this;
    self.view('main');
}

function error401() {
   var self = this;
    self.redirect('/user/signin');
}

