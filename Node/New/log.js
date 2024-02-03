const Logger=require('./Logger_event')

const logger=new Logger()
// console.log(logger)

logger.on('message',data=>console.log(data))

logger.log('hello')