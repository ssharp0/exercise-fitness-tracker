const { model, Schema } = require('mongoose')

// create workout schema table
const Workout = new Schema({
 day: {
  type: Date,
  default: Date.now()
 },
 exercises: [{
  type: {
   type: String,
   trim: true
  },
  name: {
   type: String,
   trim: true
  },
  duration: {
   type: Number,
   default: 0
  },
  weight: {
   type: Number,
   default: 0
  },
  reps: {
   type: Number,
   default: 0
  },
  sets: {
   type: Number,
   default: 0
  },
  distance: {
   type: Number,
   default: 0
  }
 }]
})


module.exports = model('Workout', Workout )