import jwt, {} from "jsonwebtoken";
export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({
            msg: "Not Authorizated to access",
        });
    }
    try {
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
        if (typeof decoded !== "object" || !decoded.id) {
            return res.status(403).json({
                msg: "Not Authorizated to access",
            });
        }
        req.userid = decoded.id;
        next();
    }
    catch (err) {
        return res.status(403).json({});
    }
};
//# sourceMappingURL=authMiddlewares.js.map