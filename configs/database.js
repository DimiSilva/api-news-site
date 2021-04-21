const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

module.exports = uri => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Mongoose! Disconnected by application of the end')
      process.exit(0)
    })
  })

  mongoose.connection.on('connected', function () {
    console.log('Mongoose! Connected')
  })

  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose! Disconnected')
  })

  mongoose.connection.on('error', function (erro) {
    console.log('Mongoose! Error at the connection')
  })
}
