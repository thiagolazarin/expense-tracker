SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tracker
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tracker` ;

-- -----------------------------------------------------
-- Schema tracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tracker` DEFAULT CHARACTER SET utf8 ;
USE `tracker` ;

-- -----------------------------------------------------
-- Table `tracker`.`tipo_transasao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tracker`.`tipo_transasao` ;

CREATE TABLE IF NOT EXISTS `tracker`.`tipo_transasao` (
  `tipo_tran_id` INT NOT NULL AUTO_INCREMENT,
  `tipo_tran_nome` VARCHAR(45) NULL,
  PRIMARY KEY (`tipo_tran_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tracker`.`categoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tracker`.`categoria` ;

CREATE TABLE IF NOT EXISTS `tracker`.`categoria` (
  `cat_id` INT NOT NULL AUTO_INCREMENT,
  `cat_nome` VARCHAR(60) NULL,
  PRIMARY KEY (`cat_id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `tracker`.`transasao`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tracker`.`transasao` ;

CREATE TABLE IF NOT EXISTS `tracker`.`transasao` (
  `tran_id` INT NOT NULL AUTO_INCREMENT,
  `tipo_transasao` INT NOT NULL,
  `tran_data` DATETIME NOT NULL,
  `tran_valor` DECIMAL(12,2) NULL,
  `cat_id` INT NULL,
  PRIMARY KEY (`tran_id`),
  INDEX `fk_tipo_tran_nome_idx` (`tipo_transasao` ASC) VISIBLE,
  INDEX `fk_cat_tran_id_idx` (`cat_id` ASC) VISIBLE,
  CONSTRAINT `fk_tipo_tran_id`
    FOREIGN KEY (`tipo_transasao`)
    REFERENCES `tracker`.`tipo_transasao` (`tipo_tran_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_cat_tran_id`
    FOREIGN KEY (`cat_id`)
    REFERENCES `tracker`.`categoria` (`cat_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;