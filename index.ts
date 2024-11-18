import { log } from 'console'
import winston from 'winston'

const logger= winston.createLogger({
    transports:[new winston.transports.Console()]
})


if(4>7){
        logger.info("working contition")
}
else{
    logger.error("error condition")
}