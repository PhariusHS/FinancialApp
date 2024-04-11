import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

function createAccessToken(payload) {

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretToken, { expiresIn: "7d" }, (error, token) => {
      if (error) {
        reject("Error getting token: " + error.message);
      } else {
        resolve(token);
      }
    });
  });
}

export default createAccessToken;
