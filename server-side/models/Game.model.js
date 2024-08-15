import Query from "./Query.model.js";
import connection from "../config/db.config.js";

class Game {
  static async createGame(game, userId) {
    try {
      const query = `
      SELECT id
      FROM packages
      WHERE name = ?`;
      const packageId = await Query.runWithParams(query, {
        name: game.name_package,
      });
      const queryTwo = `
        INSERT INTO games (nbr_clics, id_users, id_package)
        VALUES (?, ?, ?)`;
      return await Query.runWithParams(queryTwo, {
        nbr_clics: game.nbr_clics,
        id_users: userId,
        id_package: packageId[0].id,
      });
    } catch (error) {
      throw error;
    }
  }

  static async createMsg(from_user_id, to_user_id, subject, message) {
    try {
      console.log("1", from_user_id, to_user_id, subject, message);
      const query = `
      INSERT INTO messages (from_user_id, to_user_id, subject, message)
      VALUES (?, ?, ?, ?)`;
      return await Query.runWithParams(query, {
        from_user_id,
        to_user_id,
        subject,
        message,
      });
    } catch (error) {
      throw error;
    }
  }
}

export default Game;
