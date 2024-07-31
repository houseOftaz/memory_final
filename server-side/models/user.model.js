import bcrypt from "bcrypt";
import Query from "./query.model.js";
import connection from "../config/db.config.js";

class User {
  static async createUser(user) {
    try {
      const { firstname, lastname, email, password } = user;
      const userData = { firstname, lastname, email, password };
      const query = `
                INSERT INTO users (firstname, lastname, email, password, id_role, created_at)
                VALUES (?, ?, ?, ?, 1, NOW())`;
      return await Query.runWithParams(query, userData);
    } catch (error) {
      return error;
    }
  }

  static async getUsers() {
    try {
      const query = `
                SELECT id, firstname, lastname, email, password, created_at
                FROM users`;
      return await Query.runWithParams(query);
    } catch (error) {
      return error;
    }
  }

  static async getUserById(id) {
    try {
      const query = `
                SELECT id, firstname, lastname, email, password, created_at
                FROM users
                WHERE id = ?`;
      return await Query.runWithParams(query, { id });
    } catch (error) {
      return error;
    }
  }

  static async getUserByEmail(email) {
    try {
      const query = `
                SELECT id, firstname, lastname, email, password, created_at
                FROM users
                WHERE email = ?`;
      const response = await Query.runWithParams(query, { email });
      return response[0];
    } catch (error) {
      return error;
    }
  }

  static async updateUser(data, userId, avatar) {
    try {
      const query = `
                UPDATE users
                SET firstname = ?, lastname = ?, email = ?, avatar = ?
                WHERE id = ?`;
      console.log("5", data, avatar, userId);
      return await connection.execute(query, [
        data.firstname,
        data.lastname,
        data.email,
        avatar,
        userId,
      ]);
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  static async deleteUser(id) {
    try {
      const query = `
                DELETE FROM users
                WHERE id = ?`;
      return await Query.runWithParams(query, { id });
    } catch (error) {
      return error;
    }
  }
}

export default User;
