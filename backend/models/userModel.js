const mongoose = require('mongoose');

const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    sleepProblems: {
      earlySleep: {
        type: Boolean,
        default: false,
      },
      sleepThroughNight: {
        type: Boolean,
        default: false,
      },
      wakeUpOnTime: {
        type: Boolean,
        default: false,
      },
    },
    bedtime: {
      type: String,
    },
    wakeupTime: {
      type: String,
    },
    totalSleepHours: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userModel);

module.exports = User;
