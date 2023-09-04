import winston from "winston";

test("create new logger with console transport", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.error("Hello Error")
    logger.warn("Hello Warn")
    logger.info("Hello Info")
    logger.http("Hello http")
    logger.verbose("Hello verbose")
    logger.debug("Hello debug")
    logger.silly("Hello silly")
});