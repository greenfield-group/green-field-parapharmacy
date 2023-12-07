-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
-- -----------------------------------------------------
-- Schema parapharmacy
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema parapharmacy
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `parapharmacy` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`table1fafaf`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`table1fafaf` (
  `idtable1fafaf` INT NOT NULL,
  PRIMARY KEY (`idtable1fafaf`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`testtt`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`testtt` (
  `idtesttt` INT NOT NULL,
  PRIMARY KEY (`idtesttt`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;

USE `parapharmacy` ;

-- -----------------------------------------------------
-- Table `parapharmacy`.`items`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parapharmacy`.`items` (
  `iditems` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `image` VARCHAR(400) NOT NULL,
  PRIMARY KEY (`iditems`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `parapharmacy`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parapharmacy`.`users` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(400) NOT NULL,
  `admin` TINYINT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `parapharmacy`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `parapharmacy`.`cart` (
  `idcart` INT NOT NULL AUTO_INCREMENT,
  `items_iditems` INT NOT NULL,
  `users_iduser` INT NOT NULL,
  PRIMARY KEY (`idcart`),
  INDEX `fk_cart_items_idx` (`items_iditems` ASC) VISIBLE,
  INDEX `fk_cart_users1_idx` (`users_iduser` ASC) VISIBLE,
  CONSTRAINT `fk_cart_items`
    FOREIGN KEY (`items_iditems`)
    REFERENCES `parapharmacy`.`items` (`iditems`),
  CONSTRAINT `fk_cart_users1`
    FOREIGN KEY (`users_iduser`)
    REFERENCES `parapharmacy`.`users` (`iduser`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
