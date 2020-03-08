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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `Username` varchar(100) NOT NULL,
  `DisplayName` varchar(100) NOT NULL,
  `Email` varchar(100) DEFAULT NULL,
  `Source` varchar(4) NOT NULL,
  `PasswordHash` varchar(86) NOT NULL,
  `PasswordSalt` varchar(10) NOT NULL,
  `LastDirectoryUpdate` datetime DEFAULT NULL,
  `UserImage` varchar(100) DEFAULT NULL,
  `InsertDate` datetime NOT NULL,
  `InsertUserId` int NOT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `UpdateUserId` int DEFAULT NULL,
  `IsActive` smallint NOT NULL DEFAULT '1',
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin','admin','admin@dummy.com','site','rfqpSPYs0ekFlPyvIRTXsdhE/qrTHFF+kKsAUla7pFkXL4BgLGlTe89GDX5DBysenMDj8AqbIZPybqvusyCjwQ','hJf_F',NULL,NULL,'2014-01-01 00:00:00',1,NULL,NULL,1),(2,'jnunez','Javier Nuñez','jnunez@canariaszec.com','site','/vHxnx06ya4CyDDf+TMCPCf1qQCGwvqHp948Y1/OCJ0coZy60XHm0t1IoQ+uDhHXAkMTgk44K4obbiVh+D4BTg','HJd:j',NULL,NULL,'2020-02-19 10:48:28',1,NULL,NULL,1),(3,'rbernardos','Raquel','rbernardos@canariaszec.com','site','VnO2R4bs3O8ILcnDVdmLfD63IqatIFSDOkm5eFKyVjPjXLRvsjcL/CvfJwKCSJU2raD3yWD0Nh2SAN2V457Jcw','d&f;U',NULL,NULL,'2020-02-28 14:56:49',1,NULL,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-06 14:48:40
