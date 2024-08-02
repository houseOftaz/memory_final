import bcrypt from "bcrypt";
import Query from "./query.model.js";
import connection from "../config/db.config.js";

class Admin {
  static async getUsers() {
    try {
      const query = `
                SELECT id, firstname, lastname, email
                FROM users`;
      return await Query.run(query);
    } catch (error) {
      return error;
    }
  }
}

export default Admin;
