import createError from "http-errors";

export const adminOnlyMiddleware = (req, rey, next) => {
    if (req.author.role === "Admin"){
        next()
    } else{
        next(createError(403, "only ADMIN can access!"))
    }
}