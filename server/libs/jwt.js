import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Carga las variables de entorno desde el archivo .env
dotenv.config();

function createAccessToken(payload) {
  const secretToken = process.env.SECRET_TOKEN;

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretToken, { expiresIn: "7d" }, (error, token) => {
      if (error) {
        reject("Error al obtener token: " + error.message);
      } else {
        resolve(token);
      }
    });
  });
}

export default createAccessToken;
