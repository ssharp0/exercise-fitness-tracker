// require mongoose
const mongoose = require('mongoose')

// export syncDB (connect to MONGODB URI [deployed on Heroku] or local host)
module.exports = async function syncDB() { await mongoose.connect(process.env.MONGODB_URI || process.env.LOCAL_URL) }