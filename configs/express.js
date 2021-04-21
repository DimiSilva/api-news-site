'use strict'
const express = require('express'),
  helmet = require('helmet'),
  multer = require('multer'),
  cors = require('cors'),
  morgan = require('morgan')

const port = require('./environment').port,
  routes = require('../routes')

module.exports = () => {
  const app = express()

  app.use(
    cors({
      origin: '*'
    })
  )
  app.use(helmet())
  app.use(helmet.hidePoweredBy({ setTo: 'PHP 5.5.14' }))
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.frameguard())

  app.use(express.urlencoded({ extended: true }))
  app.use(express.json({ limit: '10mb' }))
  app.use(multer({ storage: multer.memoryStorage() }).any())
  app.use(morgan('tiny'))

  app.set('views', './views')
  app.set('view engine', 'ejs')

  routes.forEach(route => route(app))

  app.use((err, req, res, next) =>
    err.name === 'UnauthorizedError'
      ? res.status(401).send({ error: 'Sem autorização!' })
      : next()
  )

  app.get('*', function (req, res) {
    res.status(404).send({ error: 'not found' })
  })

  app.set('port', port || 3000)
  return app
}
