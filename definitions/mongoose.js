/**
 * Created by liguokai on 15-7-7.
 */

//initial mongoose connection
var mongoose = require('mongoose');
mongoose.createConnection(CONFIG('database'), { server: { poolSize: 5 }});