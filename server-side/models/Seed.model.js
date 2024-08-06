import Query from "./Query.model.js";

class Seed {
  static async seedDB(data) {
    const query = `
                INSERT INTO cards (name, picture, alt, id_package)
                VALUES (?, ?, ?, ?)`;
    for (let image of data) {
      try {
        await Query.runWithParams(query, image);
      } catch (error) {
        console.log(error);
      }
    }
  }

  static async seedBackCards(data) {
    const query = `
                INSERT INTO back_cards (name, picture, alt, id_package)
                VALUES (?, ?, ?, ?)`;
    for (let image of data) {
      try {
        await Query.runWithParams(query, image);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default Seed;
