import Query from "./query.model.js";

class Seed {
  static async seedDB(data) {
    const query = `
                INSERT INTO cards (name, picture, alt, id_package)
                VALUES (?, ?, ?, ?)`;
    for (let image of data) {
      console.log(image);
      try {
        await Query.runWithParams(query, image);
      } catch (error) {
        console.log(error);
      }
    }
  }

  static async seedBackCards() {
    const query = `
                INSERT INTO cards (name, picture, alt, id_package)
                VALUES (?, ?, ?, ?)`;
    for (let image of data) {
      console.log(image);
      try {
        await Query.runWithParams(query, image);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default Seed;
