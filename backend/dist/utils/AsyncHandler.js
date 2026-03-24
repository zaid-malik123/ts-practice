const TryCatch = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req, res, next);
        }
        catch (error) {
            console.log("TRY CATCH ERROR : ", error);
            next(error);
        }
    };
};
export { TryCatch };
//# sourceMappingURL=AsyncHandler.js.map