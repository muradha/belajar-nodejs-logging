import winston from "winston";

test("create new logger with console transport", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({level: "error", message: "Hello Error"})
    logger.log({level: "warn", message: "Hello Warn"})
    logger.log({level: "info", message: "Hello Info"})
    logger.log({level: "http", message: "Hello http"})
    logger.log({level: "verbose", message: "Hello verbose"})
    logger.log({level: "debug", message: "Hello debug"})
    logger.log({level: "silly", message: "Hello silly"})
});