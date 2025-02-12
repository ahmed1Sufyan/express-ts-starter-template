// @typescript-eslint/no-unsafe-member-access
// typescript-eslint/no-unsafe-call
// @typescript-eslint/no-unsafe-return
// @typescript-eslint/no-unsafe-member-access
import app from "./src/app";
import logger from "./src/config/logger";

const startServer = () => {
    const PORT = 5502;
    try {
        app.listen(PORT, () => logger.info(`Listening on port ${PORT}`));
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);
            logger.on("finish", () => {
                // process.exit(1);
            });
        }
    }
};

startServer();
