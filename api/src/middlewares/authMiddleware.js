import jwt from 'jsonwebtoken'

export function authMiddleware(req, res, next) {

    const token = req.header('X-Authorization')

    if (!token) {
        return next();
    }

    try {
        const decodedToken = jwt.verify(token, 'SDASDHSAIHDIHSAIDSAHKDHKSAHLKDS');

        req.user = decodedToken

        next();

    } catch (error) {
        res.status(401).json({ message: 'Invalid user session' })
    }

}