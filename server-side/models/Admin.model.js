import bcrypt from "bcrypt";
import Query from "./Query.model.js";
import connection from "../config/db.config.js";

class Admin {
  static async getUsers() {
    try {
      const query = `
                SELECT id, firstname, lastname, email, is_banned
                FROM users
                ORDER BY is_banned ASC, lastname ASC, firstname ASC`;
      return await Query.run(query);
    } catch (error) {
      return error;
    }
  }

  static async banishUser(id) {
    try {
      const query = `
                UPDATE users
                SET is_banned = 1
                WHERE id = ?`;
      return await Query.runWithParams(query, [id]);
    } catch (error) {
      return error;
    }
  }

  static async unbanishUser(id) {
    try {
      const query = `
                UPDATE users
                SET is_banned = 0
                WHERE id = ?`;
      return await Query.runWithParams(query, { id: id });
    } catch (error) {
      return error;
    }
  }
}

export default Admin;
