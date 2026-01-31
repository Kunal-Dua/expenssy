const globalErrorHandler = (err, req, res, next) => {
    console.error(err);
    let statusCode = 500;
    let message = "Something went wrong!";
    // Narrow unknown → Error
    if (err instanceof Error) {
        message = err.message;
        const customErr = err;
        if (customErr.statusCode) {
            statusCode = customErr.statusCode;
        }
    }
    res.status(statusCode).json({
        status: statusCode >= 400 && statusCode < 500 ? "fail" : "error",
        message,
    });
};
export default globalErrorHandler;
//# sourceMappingURL=error.js.map