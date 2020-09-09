import db from "../src/models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserService {
  static async getAllUsers() {
    try {
      return await db.User.findAll();
    } catch (e) {
      throw e;
    }
  }

  static async addUser(newUser) {
    try {
      return await db.User.create({
        name: newUser.name,
        email: newUser.email,
        password: bcrypt.hashSync(newUser.password, 8),
      });
    } catch (e) {
      throw e;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await db.User.findOne({
        where: { id: Number(id) },
      });
      if (userToUpdate) {
        await db.User.update(updateUser, { where: { id: Number(id) } });
        return updateUser;
      }
      return null;
    } catch (e) {
      throw e;
    }
  }

  static async getAUser(id) {
    try {
      return await db.User.findOne({
        where: { id: Number(id) },
      });
    } catch (e) {
      throw e;
    }
  }

  static async deleteUser(id) {
    try {
      const userToDelete = await db.User.findOne({
        where: { id: Number(id) },
      });
      if (userToDelete) {
        return await db.User.destroy({
          where: { id: Number(id) },
        });
      }
      return null;
    } catch (e) {
      throw e;
    }
  }

  static async signin({ email, password }) {
    try {
      const user = await db.User.findOne({
        where: { email },
      });
      console.log(user);
      const passwordCheck = bcrypt.compareSync(password, user.password);
      if (!passwordCheck) {
        return {
          loggedIn: false,
          accessToken: null,
          message: "Invalid password",
        };
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: 86400,
      });
      return {
        loggedIn: true,
        id: user.id,
        email: user.email,
        accessToken: token,
      };
    } catch (e) {
      throw e;
    }
  }
}

export default UserService;
