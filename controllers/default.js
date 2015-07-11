'use strict';
exports.install = function() {
    F.route('#401', error401);
};

function error401() {
   var self = this;
    self.redirect('/user/signin');
}

