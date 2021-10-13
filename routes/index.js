// // require express router
const router  = require('express').Router()

// // prefix api to workout routes
router.use('/api', require('./apiWorkoutRoutes.js'))
router.use(require('./viewRoutes.js'))

// export the router
module.exports = router
