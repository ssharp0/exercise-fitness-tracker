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
 }],
 // totalDuration: {
 //  type: Number,
 //  default: 0
 // }
})

// https://mongoosejs.com/docs/api.html#schema_Schema-virtuals
// create a virtual type totalDuration to use (sum the exercises in a workout) - this will be used for line chart
Workout.set('toObject', { virtuals: true })
Workout.set('toJSON', { virtuals: true })

// set the virtual totalDuration - for each exercise (in the workouts) the total duration is equal to the addition assignment operator (i.e. sum of all the exercise durations in a workout) - then return the total duration
Workout.virtual('totalDuration').get(function () {
  let totalDuration = 0
  this.exercises.forEach(exercise => { totalDuration += exercise.duration })
  return totalDuration
 })

 // export the workout model
module.exports = model('Workout', Workout )