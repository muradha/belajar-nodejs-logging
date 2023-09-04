import winston from "winston";

test("create new logging with format", () => {
    const logger = winston.createLogger({
        level: "info",
        // format: winston.format.json(),
        // format: winston.format.simple(),
        format: winston.format.simple(),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello logging"
    })
});