-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 26 août 2024 à 18:53
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
-- Structure de la table `back_cards`
--

DROP TABLE IF EXISTS `back_cards`;
CREATE TABLE IF NOT EXISTS `back_cards` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(30) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `id_package` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `back_cards`
--

INSERT INTO `back_cards` (`id`, `name`, `picture`, `alt`, `id_package`) VALUES
(1, 'back-animals', 'back-animals.webp', 'back-animals', 1),
(2, 'back-heros', 'back-heros.webp', 'back-heros', 3),
(3, 'back-monuments', 'back-monuments.webp', 'back-monuments', 4);

-- --------------------------------------------------------

--
-- Structure de la table `cards`
--

DROP TABLE IF EXISTS `cards`;
CREATE TABLE IF NOT EXISTS `cards` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `picture` varchar(30) NOT NULL,
  `alt` varchar(255) NOT NULL,
  `id_package` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `card_ibfk_1` (`id_package`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cards`
--

INSERT INTO `cards` (`id`, `name`, `picture`, `alt`, `id_package`) VALUES
(151, 'cat.webp', 'cat.webp', 'cat', 1),
(152, 'cow.webp', 'cow.webp', 'cow', 1),
(153, 'dog.webp', 'dog.webp', 'dog', 1),
(154, 'eagle.webp', 'eagle.webp', 'eagle', 1),
(155, 'elephant.webp', 'elephant.webp', 'elephant', 1),
(156, 'monkey.webp', 'monkey.webp', 'monkey', 1),
(157, 'panda.webp', 'panda.webp', 'panda', 1),
(158, 'parrot.webp', 'parrot.webp', 'parrot', 1),
(159, 'shark.webp', 'shark.webp', 'shark', 1),
(160, 'snake.webp', 'snake.webp', 'snake', 1),
(161, 'america.webp', 'america.webp', 'america', 3),
(162, 'batman.webp', 'batman.webp', 'batman', 3),
(163, 'flash.webp', 'flash.webp', 'flash', 3),
(164, 'greenlantern.webp', 'greenlantern.webp', 'greenlantern', 3),
(165, 'hawkman.webp', 'hawkman.webp', 'hawkman', 3),
(166, 'hulk.webp', 'hulk.webp', 'hulk', 3),
(167, 'ironman.webp', 'ironman.webp', 'ironman', 3),
(168, 'spiderman.webp', 'spiderman.webp', 'spiderman', 3),
(169, 'superman.webp', 'superman.webp', 'superman', 3),
(170, 'wonderwoman.webp', 'wonderwoman.webp', 'wonderwoman', 3),
(171, 'agkor.webp', 'agkor.webp', 'agkor', 4),
(172, 'china.webp', 'china.webp', 'china', 4),
(173, 'china2.webp', 'china2.webp', 'china2', 4),
(174, 'coliseum.webp', 'coliseum.webp', 'coliseum', 4),
(175, 'egypt.webp', 'egypt.webp', 'egypt', 4),
(176, 'jordany.webp', 'jordany.webp', 'jordany', 4),
(177, 'machupiccu.webp', 'machupiccu.webp', 'machupiccu', 4),
(178, 'mexico.webp', 'mexico.webp', 'mexico', 4),
(179, 'rio.webp', 'rio.webp', 'rio', 4),
(180, 'tajmahal.webp', 'tajmahal.webp', 'tajmahal', 4);

-- --------------------------------------------------------

--
-- Structure de la table `games`
--

DROP TABLE IF EXISTS `games`;
CREATE TABLE IF NOT EXISTS `games` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `nbr_clics` int NOT NULL,
  `id_users` int UNSIGNED NOT NULL,
  `id_package` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_package` (`id_package`),
  KEY `id_user` (`id_users`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `from_user_id` int UNSIGNED NOT NULL,
  `to_user_id` int UNSIGNED NOT NULL,
  `subject` varchar(30) NOT NULL,
  `message` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `from_user_id` (`from_user_id`),
  KEY `to_user_id` (`to_user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `packages`
--

DROP TABLE IF EXISTS `packages`;
CREATE TABLE IF NOT EXISTS `packages` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `level` int UNSIGNED NOT NULL,
  `total_card` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `packages`
--

INSERT INTO `packages` (`id`, `name`, `level`, `total_card`) VALUES
(1, 'animals', 1, 10),
(3, 'heros', 2, 10),
(4, 'monuments', 3, 10);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'user'),
(2, 'admin');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('IVCZdRNeoDT5BZk8xPxb8fogSXGzOiJK', 1724836712, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-08-23T22:00:48.885Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":140,\"firstname\":\"z\",\"lastname\":\"z\",\"email\":\"z@z.z\"}}'),
('UlA7Bdfo8WBaIfroOLZAAz3u2CblMOQy', 1725301833, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-09-02T18:30:33.302Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"user\":{\"id\":156,\"firstname\":\"admin\",\"lastname\":\"admin\",\"email\":\"admin@admin.io\"}}'),
('jGbXYzy2dq_DVQUiX9erB0QqaNHyKbX7', 1725147048, '{\"cookie\":{\"originalMaxAge\":604800000,\"expires\":\"2024-08-31T20:42:54.279Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\",\"sameSite\":\"lax\"},\"isLogged\":true,\"user\":{\"role\":\"admin\",\"id\":131,\"firstname\":\"a\",\"lastname\":\"a\",\"email\":\"a@a.a\",\"avatar\":\"61659da7-c756-4f3a-840c-7c83de0351e2.webp\"}}');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `birthdate` date DEFAULT NULL,
  `avatar` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` char(60) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `id_roles` int UNSIGNED NOT NULL DEFAULT '1',
  `is_banned` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `user_ibfk_1` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=157 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `birthdate`, `avatar`, `password`, `created_at`, `id_roles`, `is_banned`) VALUES
(156, 'admin', 'admin', 'admin@admin.io', NULL, NULL, '$2b$10$21pxawNJttop4nraKXY8Kuq4n2qJj0FHxy7CpDrgGgmCFr0VobDcW', '2024-08-26 20:30:33', 2, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cards`
--
ALTER TABLE `cards`
  ADD CONSTRAINT `cards_ibfk_1` FOREIGN KEY (`id_package`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`id_package`) REFERENCES `packages` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `games_ibfk_2` FOREIGN KEY (`id_users`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`from_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`to_user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
