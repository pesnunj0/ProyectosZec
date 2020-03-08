-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: default
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `exceptions`
--

DROP TABLE IF EXISTS `exceptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `exceptions` (
  `Id` bigint NOT NULL AUTO_INCREMENT,
  `GUID` varchar(40) NOT NULL,
  `ApplicationName` varchar(50) NOT NULL,
  `MachineName` varchar(50) NOT NULL,
  `CreationDate` datetime NOT NULL,
  `Type` varchar(100) NOT NULL,
  `IsProtected` tinyint(1) NOT NULL DEFAULT '1',
  `Host` varchar(100) DEFAULT NULL,
  `Url` varchar(500) DEFAULT NULL,
  `HTTPMethod` varchar(10) DEFAULT NULL,
  `IPAddress` varchar(40) DEFAULT NULL,
  `Source` varchar(100) DEFAULT NULL,
  `Message` varchar(1000) DEFAULT NULL,
  `Detail` longtext,
  `StatusCode` int DEFAULT NULL,
  `SQL` longtext,
  `DeletionDate` datetime DEFAULT NULL,
  `FullJson` longtext,
  `ErrorHash` int DEFAULT NULL,
  `DuplicateCount` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`Id`),
  KEY `IX_Exceptions_GUID_App_Del_Cre` (`GUID`,`ApplicationName`,`DeletionDate`,`CreationDate` DESC),
  KEY `IX_Exceptions_Hash_App_Cre_Del` (`ErrorHash`,`ApplicationName`,`CreationDate` DESC,`DeletionDate`),
  KEY `IX_Exceptions_App_Del_Cre` (`ApplicationName`,`DeletionDate`,`CreationDate` DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exceptions`
--

LOCK TABLES `exceptions` WRITE;
/*!40000 ALTER TABLE `exceptions` DISABLE KEYS */;
/*!40000 ALTER TABLE `exceptions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-06 14:48:39
