// require express router
const router = require('express').Router()

// require path to join directory names
const { join } = require('path')

// home route (catch all) response send file index.html
router.get('/*', (req, res) => {
 res.sendFile(join(__dirname, '../public/index.html'))
})

// get exercise
router.get('/exercise', (req, res) => {
 res.sendFile(join(__dirname, '../public/exercise.html'))
})

// get stats
router.get('/stats', (req, res) => {
 res.sendFile(join(__dirname, '../public/stats.html'))
})

// export router
module.exports = router