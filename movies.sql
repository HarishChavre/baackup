-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema backup_sql
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema backup_sql
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `backup_sql` ;
USE `backup_sql` ;

-- -----------------------------------------------------
-- Table `backup_sql`.`movies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `backup_sql`.`movies` (
  `movie_id` INT NOT NULL,
  `movie_title` VARCHAR(45) NOT NULL,
  `release_date` DATE NULL,
  PRIMARY KEY (`movie_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
