import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
export const isAuthenticated = (req, _, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return next(new ApiError(401, "Unauthorized"));
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error) {
        return next(new ApiError(401, "Invalid token"));
    }
};
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new ApiError(404, "forbidden request");
        }
    };
};
//# sourceMappingURL=auth.middleware.js.map