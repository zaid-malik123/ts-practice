const errorHandler = (err, req, res, next) => {
    console.log("GLOBAL ERROR THROW Error : ", err);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};
export { errorHandler };
//# sourceMappingURL=error.middleware.js.map