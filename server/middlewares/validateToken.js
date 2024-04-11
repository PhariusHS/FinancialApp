import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, secretToken, (error, user) => {
    if (error) return res.status(401).json({ message: "Invalid token" });

    req.user = user;
    next();
  });
};
