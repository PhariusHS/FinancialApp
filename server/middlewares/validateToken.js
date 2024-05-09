import jwt from "jsonwebtoken";
import { secretToken } from "../config/config.js";

export const authRequired = (req, res, next) => {
  const token = req.headers.authorization; // Acceder al token desde las cabeceras

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  // El token generalmente incluye la palabra "Bearer" seguida del token en sí
  const tokenWithoutBearer = token.replace("Bearer ", "");

  jwt.verify(tokenWithoutBearer, secretToken, (error, user) => {
    if (error) return res.status(401).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
};
