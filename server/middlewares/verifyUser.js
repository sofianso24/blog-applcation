import jwt from "jsonwebtoken";

export const verifyUser = async (req, res, next) => {
    const token = req.headers.authorization
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

    if (!decodedToken) {
        return res.status(500).send({ error: "no auth" });
    }

    const userId = decodedToken.userId
    res.locals.userId = userId
    next()
}