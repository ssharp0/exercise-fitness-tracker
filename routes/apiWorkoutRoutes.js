// require express router
const router = require('express').Router();

// require Workout model
const { Workout } = require('../models')

// Resrouces for referenece for aggregation to calc totalDuration per workout (sum total of exercises duration in each workout):
  // https://mongoosejs.com/docs/api.html#aggregate_Aggregate
  // https://mongoosejs.com/docs/api.html#aggregate_Aggregate-addFields
  // https://docs.mongodb.com/manual/reference/operator/aggregation/addFields/
  // https://docs.mongodb.com/manual/reference/operator/aggregation/sum/
  // https://docs.mongodb.com/manual/meta/aggregation-quick-reference/#std-label-aggregation-expressions

  // router to get all workouts 
router.get('/workouts', (req, res) => {
  // aggregate the workout model and add field totalDuration to sum the exercises.duration (calc and return the collective sum of numeric values in this case the total exercises duration)
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' }} }
  ])
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => { res.json(err) })
})

// get workouts in range (seven day range limit)
router.get('/workouts/range', (req, res) => {
  Workout.find().limit(7)
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => { res.json(err) })
})

// create a new workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => { res.json(err) })
})

// update a workout (push/add the exercise to the workout) by it's id (workout id matches the request parameters id)
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => { res.json(err) })
})

// delete a workout by id (using the request params id passed through) - used in postman for testing
router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndRemove(req.params.id)
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => { res.json(err) })
})

// export the router
module.exports = router