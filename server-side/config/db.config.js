
import mysql from 'mysql2/promise';  // module mysql2 pour la connexion à la BDD
import dotenv from 'dotenv'; // chargement des var d'env depuis .env


dotenv.config(); //chargement des var d'env

// création d'une connexion à la BDD mySQL en utilisant les VE
const connection = mysql.createPool({
    connectionLimit : 10000,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASWD,
    database: process.env.DB_NAME
});

// connexion à la BDD et gestion des erreurs potentielles
connection.getConnection()
    .then((res) => {
        // Log a success message with the database name if the connection is successful
        console.log("Connected to the database " + res.config.database);
        // Release the connection back to the pool
        connection.releaseConnection(res);
    })
    .catch((err) => {
        // Log an error message if the connection fails
        console.error("Error while connecting to the database: " + err.message);
    });

// exportation de la connexion pour l'utiliser dans d'autres fichiers
export default connection;
