-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : dim. 23 avr. 2023 à 21:38
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `Atelier_NourEdde`
--

-- --------------------------------------------------------

--
-- Structure de la table `agencements`
--

CREATE TABLE `agencements` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `categorie` enum('Neuf','Réemplois','Mixte') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `agencements`
--

INSERT INTO `agencements` (`id`, `name`, `location`, `description`, `categorie`, `createdAt`, `updatedAt`) VALUES
(1, 'La table kipik', 'Lieu dit le jardin du bison', 'Une table de salon en poil de herisson', NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(2, 'La fontaine à rétention d\'eau', 'Honolulu les bain', 'Réalisation d\'une fontaine en carapace de chameau', NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(3, 'Lunette douillette', 'La cabane au fond du jardin', 'Ajout d\'une lunette en poil de bananier, ça gratte mais l\'isolation est améliorée', NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(4, 'Tchoubidodo 2.0', 'Panier de tchoubi', 'Rembourrage de son coussin par des peaux de peluches machouillés, pour réver boulot, il n\'y à pas mieux', NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Mixte'),
(2, 'Réemploi'),
(3, 'Neuf');

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `content` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `comments`
--

INSERT INTO `comments` (`id`, `userName`, `content`, `createdAt`, `updatedAt`, `user_id`) VALUES
(1, 'Marianne', 'Les meubles de l\'atelier de Nour sont extraordinaires tant par leurs robustesse que par leurs originalité, merci pour ce travail de qualité', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(2, 'Steph', 'Un seul mot TOP :\r\nLes meubles sont beaux, colorés et réalisés avec soin.. Un grand merci pour mon hamac en soie d\'araignée', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 4),
(3, 'Natcho', 'Le plastique c\'était fantastiques dans les années 50, mais il faut vivre avec sont temps. Ma gourde en véritable noix de coco à quelques fuites mais je me sens plus engagée que jamais ', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(4, 'Steph', 'Travail parfait, mon pouf en copeaux de bois recyclés est très confort. J\'ai pu être quelques fois dérangé par les échardes, mais pour la planète je suis prêt à tout !', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 4),
(5, 'Nour_edde', 'J\'aime beaucoup ce que je fait, je le fait avec plaisir et amour, venez me voir quand vous pourrez                               :)', '2023-04-23 19:13:32', '2023-04-23 19:13:32', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `chemin` varchar(255) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categorie_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `name`, `chemin`, `description`, `createdAt`, `updatedAt`, `categorie_id`) VALUES
(1, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Amenagement-chambre-enfant-bois-recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(2, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Atelier-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(3, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bibliotheque-bois-recycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(4, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bibliotheque-bois-recycle-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(5, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bibliotheque-bois-recycle-Avec-Espace-de-Lecture', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(6, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bibliotheque-bois-recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(7, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bougeoir-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(8, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bougeoir-Bois-Recycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(9, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Bougeoir-Bois-Recycle-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(10, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Desserte-bois-reycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(11, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Desserte-bois-reycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(12, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Desserte-bois-reycle-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(13, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Escalier-avec-rangements-bois-recycles', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(14, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Garde-corp-Bois-Recycle-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(15, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Garde-corp-Bois-Recycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(16, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Garde-corp-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(17, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Grand-Coffre-de-rangement-bois-recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(18, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Meuble-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(19, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Meuble-haut-bois-recycle-4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 3),
(20, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Meuble-haut-bois-recycle-3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(21, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Meuble-haut-bois-recycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 1),
(22, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Meuble-haut-bois-recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(23, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Porte-Manteau-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(24, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Table-basse-bois-recycle-2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(25, 'Nos Réalisations _ Atelier Nour ÉDDÉ', './images/Nour-Edde_Table-basse-bois-recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', 2),
(26, 'DaPoulp d\'argent', './images/Nour-Edde_Table-Bois-Recycle', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', NULL),
(27, 'DaPoulp d\'argent', './images/Nour-Edde_Detail-finition-meuble', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum illo natus adipisci, eos soluta recusandae vitae explicabo illum rem, eaque tempora beatae porro vero quod? Cumque velit error quo sunt alias odit dolorum perferendis in, voluptatibus porro ducimus dicta illum officiis sequi minus. Corporis eligendi voluptates dolore ut ex? Voluptas.', '2023-04-23 17:56:46', '2023-04-23 17:56:46', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `meubles`
--

CREATE TABLE `meubles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `categorie` enum('Neuf','Réemplois','Mixte') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `meubles`
--

INSERT INTO `meubles` (`id`, `name`, `description`, `prix`, `categorie`, `createdAt`, `updatedAt`) VALUES
(1, 'Table de jeu', 'Table de jeux en patachoux', 999, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(2, 'Buro bul', 'Bureau en bulle qui plop', 123, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(3, 'Table basse, en vielle basse', 'BContre basse de récup dotée d\'un mini bar à shweps', 124, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46');

-- --------------------------------------------------------

--
-- Structure de la table `petitObjets`
--

CREATE TABLE `petitObjets` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `prix` int(11) DEFAULT NULL,
  `categorie` enum('Neuf','Réemplois','Mixte') DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `petitObjets`
--

INSERT INTO `petitObjets` (`id`, `name`, `description`, `prix`, `categorie`, `createdAt`, `updatedAt`) VALUES
(1, 'Lunette en fil de pêche', 'Lunette en fil de pêche de réemplois, qui sentent bon la marée', 10, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(2, 'Tiny house pour escargot', 'Une vieille game boy qui ne fonctionnais plus, transformée en maison pour escargot.', 42, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46'),
(3, 'L\'ordinatueur 2.0', 'Un IMAC de première génération réemployé en tapette à mouche dernière génération', 21, NULL, '2023-04-23 17:56:46', '2023-04-23 17:56:46');

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Admin'),
(2, 'User');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `eMail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `userName`, `eMail`, `password`, `createdAt`, `updatedAt`, `role_id`) VALUES
(1, 'Marianne', 'Marianne@tchoubi.fr', '$2b$10$Nz4xpPlr.yA3Qa.ZW1T.QOjCYUUpwZRwhlq3UPk/U9SS/dD/gJ05.', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 1),
(2, 'Stephanie', 'Stephanie@tchoubi.fr', '$2b$10$sABGpy/SguSqzP9D0G7tauC7kw1jTkHZaRFkXyeAQKT5ykiGxUoY2', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 2),
(3, 'Natcho', 'tchoubi@tchoubi.fr', '$2b$10$vw2pwISKfmsyHcjRnIY5.eS9QJAeM.kuNQn4DbZpRUHD6PtcYVnQi', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 2),
(4, 'Dora', 'Dora@tchoubi.fr', '$2b$10$gb3ljI7cFAiBfWzD6hIPwuAg8LdgW5mvJQJaHtxGpSkscE7j5U0Vu', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 2),
(5, 'Anne-Marie', 'Anne-Marie@tchoubi.fr', '$2b$10$eyjvcZfRMtStM0mb.zKBYO94D93Joxs5qamaddWKzDjrYgNtV5Sou', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 2),
(6, 'Laurent', 'Laurent@tchoubi.fr', '$2b$10$ByQmIjq1BIN4K7IIUifhA.aRKjN/dgvBo3eHZmv3kFzXircF2SivG', '2023-04-23 17:56:47', '2023-04-23 17:56:47', 2),
(8, 'Nour_Edde', 'Nour_Edde@tchoubi.fr', '$2b$10$vVFq/G1bg2BquNJuISDLL.btX9EalMqJHjr7pLboYwqu44BqnXVzm', '2023-04-23 18:40:44', '2023-04-23 18:40:44', 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agencements`
--
ALTER TABLE `agencements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_ibfk_1` (`user_id`);

--
-- Index pour la table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorie_id` (`categorie_id`);

--
-- Index pour la table `meubles`
--
ALTER TABLE `meubles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `petitObjets`
--
ALTER TABLE `petitObjets`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_userName_unique` (`userName`),
  ADD UNIQUE KEY `users_eMail_unique` (`eMail`),
  ADD KEY `role_id` (`role_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agencements`
--
ALTER TABLE `agencements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT pour la table `meubles`
--
ALTER TABLE `meubles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `petitObjets`
--
ALTER TABLE `petitObjets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`categorie_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
