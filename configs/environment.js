const env = process.env.NODE_ENV || 'dev'

const configs = {
  dev: {
    jwt_secret:
      '_rti28tJjHT3wAjNTqXltqXDq3eo8ju8nPkM43TjuCjWHDnYK4rKsSLjIR3wXpqtUHFm43X9-WxHMfIa-TU0AXHvLWanCzXz7ogr2FHDvXrSJra5MbaV82_JsiXUE1FLxqt2kjzKvSmAvtI1VkyLUpILSsKrx1SroUxJ7AMF9v0',
    mongodb_uri: 'mongodb://localhost',
    port: 3000
  },
  staging: {
    jwt_secret: process.env.JWT_SECRET,
    mongodb_uri: process.env.MONGODB_URI,
    port: process.env.PORT
  },
  production: {
    jwt_secret: process.env.JWT_SECRET,
    mongodb_uri: process.env.MONGODB_URI,
    port: process.env.PORT
  }
}

Object.entries(configs).forEach(([env, arr]) => (arr.env = env))

const config = configs[env]
if (!config) throw new Error(`NODE_ENV \`${env}\` NOT CONFIGURED!`)

const badProperty = Object.values(config).find(value => value === undefined)

if (badProperty)
  throw new Error(
    `NODE_ENV \`${env}\` KEY \`${badProperty[0]}\` is undefined! Please configure it!`
  )

module.exports = config
