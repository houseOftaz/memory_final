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
      return await Query.runWithParams(
        queryTwo,
        Object.values({
          nbr_clics: game.nbr_clics,
          id_users: userId,
          id_package: packageId[0].id,
        })
      );
    } catch (error) {
      console.log("1", error);
      throw error;
    }
  }
}

export default Game;
