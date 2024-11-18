import winston from 'winston'

const logger= winston.createLogger({
    transports:[new winston.transports.Console()]
})


if(10>7){
        logger.info("working contition")
}
else{
    logger.error("error condition")
}