const mongoose  = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-commerce'
)

// const mongoose  = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/e-commerce', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   // Increase the buffer timeout to 30 seconds (or any suitable value)
//   serverSelectionTimeoutMS: 30000,
// })