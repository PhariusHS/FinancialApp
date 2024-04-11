import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import createAccessToken from '../libs/jwt.js'


export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      username,
      password: passwordHash,
    });
    const userSaved = await newUser.save();
    const token = await createAccessToken({id: userSaved._id})

   
    res.cookie('token', token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    console.error("No se pudo crear el usuario", error);
    res.status(500).json({ error: "Error al crear usuario" });
  }
};
export const login = (req, res) => {};
