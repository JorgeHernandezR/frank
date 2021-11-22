-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 22, 2021 at 01:13 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `friki_art_cja_bd`
--

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--
CREATE Database friki_art_cja_bd;
USE friki_art_cja_bd;

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nom_producto` varchar(40) NOT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `precio` float NOT NULL,
  `imagen` varchar(100) NOT NULL,
  PRIMARY KEY (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id_producto`, `nom_producto`, `descripcion`, `precio`, `imagen`) VALUES
(1, 'Videojuego Nier Automata PS4', 'Juego de accion y RPG japones', 1200, '../public/images/Nier.jpeg'),
(2, 'Camiseta Yuno Mirai Niki ', 'Camiseta estampado anime ', 850, '../public/images/Camisa Mirai.jpeg'),
(3, 'Maquillaje Kim Chic Palette ', 'Maquillaje para piel completa de la marca Kim Chic ', 1700, '../public/images/KinChi.jpeg'),
(4, 'Funko-pop Hatsune Miku ', 'Funko-pop Hatsune miku Diva pop ', 700, '../public/images/FunkoMiku.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
