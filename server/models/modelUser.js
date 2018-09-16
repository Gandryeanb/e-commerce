const mongoose = require('mongoose')
const encryptor = require('../helpers/passEncryptor')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fname:  {
    type: String,
    required : true
  },
  lname: String,
  email:  {
    type : String,
    required : true,
    unique : true
  },
  password: {
    type : String,
    required : true,
    validate : {
      validator : function (val) {
        if (val.length >= 8) {
          return true
        } else {
          return false
        }
      }
    }
  },
  deposit : {
    type : String,
    default : "0",
    validate : {
      validator (val) {
        if (val <= "5000000" && val >= 0) {
          return true
        } else {
          return false
        }
      }
    }

  }
},{
    timestamps : true
});

userSchema.post('validate',function (doc) {
  doc.password = encryptor(doc.password)
})

const User = mongoose.model('User', userSchema);

module.exports = User