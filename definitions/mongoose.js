/**
 * Created by liguokai on 15-7-7.
 */

//initial mongoose connection
var mongoose = require('mongoose');
mongoose.connect(CONFIG('database'));