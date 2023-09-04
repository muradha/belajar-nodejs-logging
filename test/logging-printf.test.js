import winston from "winston";

test("create new logging with format", () => {
    const logger = winston.createLogger({
        level: "info",
        format: winston.format.printf(info => {
            return `${new Date()} - ${info.level.toUpperCase()}: ${info.message}`;
        }),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({
        level: "info",
        message: "Hello logging"
    })
});