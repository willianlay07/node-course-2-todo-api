const mongoose    = require('mongoose');
const validator   = require('validator');
const jwt         = require('jsonwebtoken');
const _           = require('lodash');

// Sample we need to User Model;
// {
//   email: 'willianlay07@gmail.com',
//   password: '1112323232asdfasdfsadf',
//   token: [{
//       access: 'auth',
//       token: '1alajalala'
//   }]
// }

var UserSchema  = new mongoose.Schema({
      email: {
          type: String,
          required: true,
          minlength: 1,
          trim: true,
          unique: true,
          validate: {
              validator: (value) => {
                  return validator.isEmail(value);
              },
              message: '{VALUE} is not a valid email!'
          }
      },
      password: {
          type: String,
          required: true,
          minlength: 6
      },
      tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
      }]
});

// Overwrite Method for mongoose to handle; What mongoose value convert to JSON value;
UserSchema.methods.toJSON = function () {
    var user        = this;
    var userObject  = user.toObject();    // Mongoose variable convert to Object;

    return _.pick(userObject, ['_id', 'email']);
};

// Instance Method;
UserSchema.methods.generateAuthToken  = function () {
      var user    = this;   // calling individual users;
      var access  = 'auth';
      var token   = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

      user.tokens.push({
          access,
          token
      });

      return user.save().then(() => {
          return token;
      });
};

// Model methods;
UserSchema.statics.findByToken = function (token) {
    var User  = this;
    var decoded;

    try {
        decoded = jwt.verify(token, 'abc123');
    } catch (e) {
        // return new Promise((resolve, reject) => {
        //     reject();
        // });
        return Promise.reject('wrong token');
    }

    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

var User   = mongoose.model('User', UserSchema);

module.exports  = {User};   // export; when export need to use object;
