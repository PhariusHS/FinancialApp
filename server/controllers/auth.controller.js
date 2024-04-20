import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createAccessToken from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { secretToken } from "../config.js";

export const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const userFound = await User.findOne({ email }); //Verificamos que el email no este en uso
    if (userFound) return res.status(400).json(["The email is already in use"]);

    const passwordHash = await bcrypt.hash(password, 10); // encriptado password

    const newUser = new User({
      // creacion del usuario
      email,
      username,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({ id: userSaved._id });
    //Invocamos la funcion createToken para el usuario

    res.cookie("token", token);
    res.json({
      // devolucion para el front
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ email });

    if (!userFound)
      //Verificamos que exista un usuario con el email ingresado
      return res.status(400).json(["Invalid credential"]);

    const isMatch = await bcrypt.compare(password, userFound.password);
    //Verificamos si la password es la correcta

    if (!isMatch)
      return res
        .status(400)
        .json({ issues: [{ message: "Invalid credential" }] });

    const token = await createAccessToken({ id: userFound._id });
    //En caso de ser correcta creamos el Token

    res.cookie("token", token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};

export const verify = async (req, res) => {
  const { token } = req.cookies;

  if (!token) return res.send(false);

  jwt.verify(token, secretToken, async (err, user) => {
    if (err) return res.sendStatus(401).json({ message: "User unauthorized" }); //Triple verificacion de token

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res.sendStatus(401).json({ message: "User unauthorized" });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
