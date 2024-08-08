import Query from "./Query.model.js";
import connection from "../config/db.config.js";

class Theme {
  static async getThemes() {
    try {
      const query = `
        SELECT id, name, level, total_card
        FROM packages`;
      return await Query.run(query);
    } catch (error) {
      console.log(error);
    }
  }

  static async getCardsByThemes(themeValue) {
    try {
      const query = `
      SELECT c.id, c.name, c.picture, c.alt, c.id_package
      FROM cards as c
      JOIN packages ON packages.id = c.id_package
      WHERE packages.name = ?`;
      return await Query.runWithParams(query, { themeValue: themeValue });
    } catch (error) {
      console.log(error);
    }
  }
}

export default Theme;
