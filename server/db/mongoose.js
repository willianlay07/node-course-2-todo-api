var mongoose    = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect('mongodb://willianlay07:willianlay07@ds147821.mlab.com:47821/wai-todos' || 'mongodb://localhost:27017/TodoApp');

module.exports  = {mongoose};
