const app = require('../server')
const config = require('../src/config/config')
const connect = require('../src/db/connect.js')

connect().then(async function onServerInit(){
  config.logger.info('database connected')

  app.listen(config.app.PORT,() => {
    config.logger.info(`server is running in http://localhost:${config.app.PORT}`)
  })
})



