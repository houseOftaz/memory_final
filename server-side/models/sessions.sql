-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 26 août 2024 à 18:33
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `memory_game`
--

-- --------------------------------------------------------

--
-- Structure de la table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('IVCZdRNeoDT5BZk8xPxb8fogSXGzOiJK', 1724836712, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-08-23T22:00:48.885Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":140,\"firstname\":\"z\",\"lastname\":\"z\",\"email\":\"z@z.z\"}}'),
('UlA7Bdfo8WBaIfroOLZAAz3u2CblMOQy', 1725301833, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-09-02T18:30:33.302Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":156,\"firstname\":\"admin\",\"lastname\":\"admin\",\"email\":\"admin@admin.io\"}}'),
('jGbXYzy2dq_DVQUiX9erB0QqaNHyKbX7', 1725147048, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-08-31T20:42:54.279Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"isLogged\":true,\"user\":{\"role\":\"admin\",\"id\":131,\"firstname\":\"a\",\"lastname\":\"a\",\"email\":\"a@a.a\",\"avatar\":\"61659da7-c756-4f3a-840c-7c83de0351e2.webp\"}}');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
