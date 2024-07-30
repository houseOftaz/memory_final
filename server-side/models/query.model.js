import pool from "../config/db.config.js";

class Query {
  static async run(query) {
    const [result] = await pool.query(query);
    return result;
  }
  /**
   * Execute a query with an object containing parameters.
   * @param {string} query - The SQL query to execute.
   * @param {Object} data - The object containing parameters for the query.
   * @returns {Promise} A promise that resolves to the query result.
   */
  static async runWithParams(query, data) {
    // Object.values(data) transforms the values of the properties of an object into an array
    console.log(Object.values(data));
    const [result] = await pool.execute(query, Object.values(data));
    return result;
  }
}

export default Query;
