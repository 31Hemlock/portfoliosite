-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 04, 2018 at 11:53 PM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothing`
--
CREATE DATABASE IF NOT EXISTS `clothing` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `clothing`;

DELIMITER $$
--
-- Procedures
--

-- (Not used) Show the amount of total dollar sales for some of our supplying brands (Nike and Adidas), as well as the amount of items each of them currently has in our system. Using this, we can 
-- see how certain brands compare in total sales, and make judgments about what our consumers seem to be purchasing with respect to total volume per brand. 

DROP PROCEDURE IF EXISTS `NU_CompareSalesNikeAdidas`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `NU_CompareSalesNikeAdidas` ()  BEGIN

SELECT CONCAT('Adidas: ','$', FORMAT(SUM(IL_Price * IL_Quantity),2)) AS `Total sales`,  
SUM(item_list.IL_Quantity) AS 'Number of items in our database'  
FROM item_list JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID  
JOIN item ON inventory.Item_ID = item.item_ID  
WHERE item.item_brand = 'adidas'  
UNION  
SELECT CONCAT('Nike: ','$', FORMAT(SUM(IL_Price * IL_Quantity),2)) AS `Total sales`, SUM(item_list.IL_Quantity) AS 'Number of items in our database' FROM item_list  
JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID  
JOIN item ON inventory.Item_ID = item.item_ID  
WHERE item.item_brand = 'nike'; 

END$$

-- (Not used) Lists the first and last name of customers who bought something within the last 2 years from a certain store (4). If a certain store is having a promotion going on, you could advertise 
-- it to the customers that have a history of buying from that store. 
 

DROP PROCEDURE IF EXISTS `NU_PurchasedLast2Years`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `NU_PurchasedLast2Years` ()  BEGIN

SELECT CONCAT(cust_FirstName, ' ', cust_LastName) AS Customer, CONCAT (Cust_Street, ', ', Cust_City, ', ',Cust_State, ' ', Cust_Zip) AS Address	FROM customer, purchase WHERE customer.Cust_ID = purchase.Cust_ID AND Pur_Date  >= (NOW() - interval 2 year) AND Store_ID = 4;

END$$

-- In the case of a customer service complaint, find the clerk (or clerks) who served a customer (Jake Johnson) on a given day (August 13, 2016), as well as the purchase ID associated with the 
-- transaction. 


DROP PROCEDURE IF EXISTS `NU_ServiceComplaint`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `NU_ServiceComplaint` ()  BEGIN

SELECT CONCAT_WS(" ", Clerk_FirstName, Clerk_LastName) AS 'Clerk name', purchase.Pur_ID AS 'Purchase ID' FROM Clerk JOIN Purchase ON Clerk.Clerk_ID = Purchase.Clerk_ID JOIN Customer ON Customer.Cust_ID = Purchase.Cust_ID WHERE Cust_FirstName = 'Jake' AND Cust_LastName = 'Johnson' AND Pur_Date = '2016-08-13'; 

END$$

-- Returns the names and addresses of all people who purchased a certain item within a time frame. In the case of a defect or dangerous error in production, it’s helpful to know who purchased a
-- dangerous or deficient item when it was being offered.

DROP PROCEDURE IF EXISTS `Param_ClothingCallbacks`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Param_ClothingCallbacks` (IN `PreDate` DATE, IN `PostDate` DATE, IN `Item_Name` VARCHAR(20), IN `Item_Brand` VARCHAR(20))  NO SQL
BEGIN
SELECT CONCAT(cust_FirstName, ' ', cust_LastName) AS Customer, CONCAT (Cust_Street, ', ', Cust_City, ', ',Cust_State, ' ', Cust_Zip) AS Address FROM customer JOIN purchase ON customer.Cust_ID = purchase.Cust_ID JOIN item_list ON purchase.Pur_ID = item_list.Pur_ID JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID JOIN item ON item.Item_ID = inventory.Item_ID WHERE Pur_Date > PreDate AND Pur_Date < PostDate AND item.Item_Name = Item_Name AND item.Item_Brand = Item_Brand;
END$$

--  Shows the amount of total dollar sales for some of our supplying brands, as well as the amount of items each of them currently has in our system. Using this, we can see how certain brands 
--  compare in total sales, and make judgments about what our consumers seem to be purchasing with respect to total volume per brand. 
 

DROP PROCEDURE IF EXISTS `Param_CompareSales`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Param_CompareSales` (IN `var_Brand1` VARCHAR(20) CHARSET utf8, IN `var_Brand2` VARCHAR(20) CHARSET utf8)  BEGIN


SELECT CONCAT(var_Brand1,': $', FORMAT(SUM(IL_Price * IL_Quantity),2)) AS `Total sales`,  
SUM(item_list.IL_Quantity) AS 'Number of items in our database'  
FROM item_list JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID  
JOIN item ON inventory.Item_ID = item.item_ID  
WHERE item.item_brand = var_Brand1
UNION  
SELECT CONCAT(var_Brand2,': $', FORMAT(SUM(IL_Price * IL_Quantity),2)) AS `Total sales`, SUM(item_list.IL_Quantity) AS 'Number of items in our database' FROM item_list  
JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID  
JOIN item ON inventory.Item_ID = item.item_ID  
WHERE item.item_brand = var_Brand2; 

END$$

-- In the case of a customer service complaint, find the clerk (or clerks) who served a customer on a given day, as well as the purchase ID associated with the transaction. 


DROP PROCEDURE IF EXISTS `Param_ServiceComplaint`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Param_ServiceComplaint` (IN `var_CustFirstName` VARCHAR(20), IN `var_CustLastName` VARCHAR(20), IN `var_PurDate` VARCHAR(20))  BEGIN


SELECT CONCAT_WS(" ", Clerk_FirstName, Clerk_LastName) AS 'Clerk name', purchase.Pur_ID AS 'Purchase ID' FROM Clerk JOIN Purchase ON Clerk.Clerk_ID = Purchase.Clerk_ID JOIN Customer ON Customer.Cust_ID = Purchase.Cust_ID WHERE Cust_FirstName = var_CustFirstName AND Cust_LastName = var_CustLastName AND Pur_Date = var_PurDate; 

END$$

-- Lists the first and last name of customers who bought something within the last x years from a certain store. If a certain store is having a promotion going on, you could advertise it to the customers that have a history of buying from that store. 

DROP PROCEDURE IF EXISTS `SP10_ParamCustomersByStoreByTime`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP10_ParamCustomersByStoreByTime` (IN `var_TimeYear` INT(10), IN `var_StoreID` INT(20))  BEGIN

SELECT CONCAT(cust_FirstName, ' ', cust_LastName) AS Customer, CONCAT (Cust_Street, ', ', Cust_City, ', ',Cust_State, ' ', Cust_Zip) AS Address	FROM customer, purchase WHERE customer.Cust_ID = purchase.Cust_ID AND Pur_Date  >= (NOW() - interval var_TimeYear year) AND Store_ID = var_StoreID;

END$$

-- Shows a list of pocket styles, of bottoms, organized by their popularity among customers living in Blacksburg.  A company needs to know which items are the more popular choices in respective geographic locations (especially its largest one) so that it knows where it should promote the respective items more. 

DROP PROCEDURE IF EXISTS `SP1_BlacksburgBottomPocketPopularity`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP1_BlacksburgBottomPocketPopularity` ()  BEGIN

SELECT Bottom.Bot_PocketStyle as 'Pocket Style', SUM(IL_Quantity) as 'Amount Purchased in Blacksburg' FROM Item, Bottom, Item_List, inventory, Purchase, Customer WHERE Customer.Cust_ID = Purchase.Cust_ID AND Purchase.Pur_ID = Item_List.Pur_ID AND Item_List.Inv_Item_ID = inventory.Inv_Item_ID AND inventory.Inv_Item_ID = item.Item_ID AND Item.Item_ID = Bottom.Item_ID AND customer.Cust_City = 'Blacksburg' GROUP BY Bottom.Bot_PocketStyle;

END$$

-- Shows the items that a customer has bought 6 or more of in a single purchase.  It is beneficial to know which items our customers are buying in bulk so we can determine the cause and stoke the flame. 

DROP PROCEDURE IF EXISTS `SP2_BoughtInBulk`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP2_BoughtInBulk` ()  BEGIN

SELECT item_brand AS 'Item brand',
item.Item_Name AS 'Item name',
item_list.IL_Quantity AS 'Amount of item bought in a single transaction' 
FROM Item_list 
JOIN inventory ON inventory.Inv_Item_ID = item_list.Inv_Item_ID 
JOIN item ON inventory.Item_ID = item.Item_ID 
WHERE IL_Quantity > 6;

END$$

-- Clerks are encouraged to help our customers find their items, and clerks generally manage the purchases of the customers they helped. Given this, we want to be able to compare the sales of our clerks to give us an idea of who our most active clerks are. 

DROP PROCEDURE IF EXISTS `SP3_ComparativeClerkSales`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP3_ComparativeClerkSales` ()  BEGIN

Select CONCAT_WS(" ", clerk_FirstName, clerk_lastname) AS 'Clerk', CONCAT('$',(SUM(IL_Price * IL_Quantity))) AS 'Total clerk sales' FROM clerk JOIN purchase ON clerk.clerk_ID = purchase.Clerk_ID JOIN item_list ON purchase.Pur_ID = item_list.Pur_ID GROUP BY CONCAT_WS(" ", clerk_FirstName, clerk_lastname);

END$$

-- This statement helps us find the customers who are in the same state as a certain store (store 3). This information is useful for advertising.

DROP PROCEDURE IF EXISTS `SP4_CustomersNearLocation3`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP4_CustomersNearLocation3` ()  NO SQL
BEGIN

SELECT CONCAT(cust_FirstName, ' ', cust_LastName) AS Customer, CONCAT (Cust_Street, ', ', Cust_City, ', ',Cust_State, ' ', Cust_Zip) AS Address FROM customer JOIN purchase ON customer.Cust_ID = purchase.Cust_ID JOIN store ON purchase.Store_ID = store.Store_ID WHERE store.store_ID = 3 AND customer.Cust_State = store.Store_State;

END$$

-- Shows how many customers each store has and how much money each store receives, on average, per customer. Among many things, this will help us determine where our affluent customers are located, and also which stores are most effective at extracting money from the average customer. 

DROP PROCEDURE IF EXISTS `SP5_IncomeBreakdownByLocation`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP5_IncomeBreakdownByLocation` ()  BEGIN

SELECT Store_ID AS 'Store ID', COUNT(Cust_ID) AS 'Number of customers', CONCAT('$',(SUM(IL_Price * IL_Quantity))) AS 'Total sales', CONCAT('$',ROUND((SUM(IL_Price * IL_Quantity)/COUNT(Cust_ID)),2)) AS 'Total sales per customer' FROM purchase JOIN item_list ON purchase.pur_id = item_list.Pur_ID GROUP BY Store_ID; 

END$$

-- We’d like to know the names of our biggest spenders in order to send out special promotions. This statement sorts our customers by amount of money spent. 

DROP PROCEDURE IF EXISTS `SP6_LargeSpenders`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP6_LargeSpenders` ()  BEGIN

SELECT CONCAT_WS(" ", cust_FirstName, cust_LastName) AS Buyer, CONCAT('$', FORMAT(SUM(IL_Price * IL_Quantity),2)) AS 'Has spent', CONCAT (Cust_Street, ', ', Cust_City, ', ',Cust_State, ' ', Cust_Zip) AS Address FROM customer JOIN purchase ON customer.cust_ID = purchase.cust_ID JOIN item_list ON purchase.Pur_ID = item_list.Pur_ID GROUP BY Buyer;

END$$

-- Returns currently stocked items along with their names and locations. If the company is small, this procedure can help a manager understand the distribution and quantity of their items across their stores.

DROP PROCEDURE IF EXISTS `SP7_ReturnStockedItems`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP7_ReturnStockedItems` ()  NO SQL
BEGIN

SELECT item.item_name AS 'Item Name', inventory.Inv_Quantity AS 'Quantity', 'Store' + store.Store_ID AS 'Store Number', CONCAT(store.Store_StreetAddress, ', ', store.Store_City, ', ', store.Store_State, ' ', store.Store_ZipCode) AS 'Store Address' FROM item JOIN inventory ON item.Item_ID = inventory.Item_ID JOIN store ON inventory.Store_ID = store.Store_ID WHERE item.Item_InStock = 1;

END$$

-- Shows how much revenue is generated by bottoms of each cut type. Keeping track of which items are more popular and which items are actually generating revenue in comparison to other types of items is useful in determining what items should be promoted. 

DROP PROCEDURE IF EXISTS `SP8_RevenueFromBottomCut`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP8_RevenueFromBottomCut` ()  BEGIN
SELECT Bottom.Bot_CutType AS 'Type of cut', 
concat('$',Format((count(item_List.IL_Quantity) * (IL_Price)),2)) as 'Revenue' 
FROM  item_List, Inventory, Item, Bottom 
WHERE item_List.Inv_Item_ID = Inventory.Inv_Item_ID 
AND Inventory.Item_ID = item.Item_ID 
AND Item.Item_ID = bottom.Item_ID 
GROUP BY Bottom.Bot_CutType;
END$$

-- Finds the quantity, name, item type, and dollar amount of total sales per item of a certain supplier. This will help the company understand which items (and types of items) from a certain supplier are the most popular.

DROP PROCEDURE IF EXISTS `SP9_SupplierSalesInfo`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SP9_SupplierSalesInfo` ()  BEGIN

SELECT Item.Item_Name AS 'Item Name', item.item_type AS 'Type of item', IL_Quantity AS 'Quantity of item sold', CONCAT('$', format(IL_Quantity * IL_Price,2)) AS 'Gross revenue generated from the item' FROM item_list JOIN inventory ON item_list.Inv_Item_ID = inventory.Inv_Item_ID JOIN item ON inventory.Item_ID = item.item_ID WHERE Item_Brand = "Adidas";

END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `bottom`
--

DROP TABLE IF EXISTS `bottom`;
CREATE TABLE IF NOT EXISTS `bottom` (
  `Item_ID` int(20) NOT NULL,
  `Bot_CutType` text,
  `Bot_PocketStyle` text,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bottom`
--

INSERT INTO `bottom` (`Item_ID`, `Bot_CutType`, `Bot_PocketStyle`) VALUES
(1, 'Frayed', 'Deep'),
(2, 'Ripped', 'Shallow'),
(3, 'Ripped', 'Middle'),
(4, 'Undersided', 'Shallow'),
(5, 'Thrown', 'Out');

--
-- Triggers `bottom`
--
DROP TRIGGER IF EXISTS `updateItemFormality`;
DELIMITER $$
CREATE TRIGGER `updateItemFormality` AFTER UPDATE ON `bottom` FOR EACH ROW BEGIN
UPDATE item JOIN bottom ON item.Item_ID = bottom.Item_ID SET item.Item_Formality = 'Casual' WHERE item.Item_ID = bottom.Item_ID AND bottom.Bot_CutType = 'Frayed';
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `clerk`
--

DROP TABLE IF EXISTS `clerk`;
CREATE TABLE IF NOT EXISTS `clerk` (
  `Clerk_ID` int(20) NOT NULL,
  `Clerk_FirstName` text,
  `Clerk_LastName` text,
  PRIMARY KEY (`Clerk_ID`),
  KEY `Clerk_ID` (`Clerk_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `clerk`
--

INSERT INTO `clerk` (`Clerk_ID`, `Clerk_FirstName`, `Clerk_LastName`) VALUES
(1, 'John', 'Doe'),
(2, 'David', 'Davis'),
(3, 'Thomas', 'Thompson'),
(4, 'Jeffery', 'Jefferson'),
(5, 'John', 'Johnson'),
(6, 'Sarah', 'Sarahson'),
(7, 'Jake', 'Jakeson'),
(8, 'James', 'Jameson'),
(9, 'Robert', 'Robertson'),
(10, 'Pope', 'Popeson');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `Cust_ID` int(20) NOT NULL,
  `Cust_FirstName` text,
  `Cust_LastName` text,
  `Cust_Zip` varchar(11) DEFAULT NULL,
  `Cust_Street` varchar(25) DEFAULT NULL,
  `Cust_State` text,
  `Cust_City` text,
  PRIMARY KEY (`Cust_ID`),
  KEY `Cust_ID` (`Cust_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Cust_ID`, `Cust_FirstName`, `Cust_LastName`, `Cust_Zip`, `Cust_Street`, `Cust_State`, `Cust_City`) VALUES
(1, 'Andrew', 'Johnson', '24060', '123 Street', 'VA', 'Blacksburg'),
(2, 'Andrew', 'Jackson', '22303', '47 Cauliflower lane', 'VA', 'Blacksburg'),
(3, 'Andrew', 'Jones', '22303', '48 Cauliflower lane', 'VA', 'Alexandria'),
(4, 'Rachel', 'Johnson', '24060', '48 Cauliflower lane', 'VA', 'Blacksburg'),
(5, 'Jake', 'Johnson', '24060', '123 3rd St', 'VA', 'Blacksburg'),
(6, 'Paul', 'Rivers', '24060', '123 4th St', 'VA', 'Blacksburg'),
(7, 'Gee', 'Johnson', '24060', '123 5th St', 'VA', 'Alexandria'),
(8, 'Qualt', 'Johnson', '24060', '123 6th St', 'VA', 'Blacksburg'),
(9, 'Dest', 'Mayweather', '22303', '123 Barn Lane', 'VA', 'Alexandria'),
(10, 'May', 'Johnson', '90210', '49 Cauliflower lane', 'VA', 'Blacksburg');

-- --------------------------------------------------------

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
CREATE TABLE IF NOT EXISTS `inventory` (
  `Inv_Item_ID` int(20) NOT NULL,
  `Store_ID` int(20) DEFAULT NULL,
  `Item_ID` int(20) DEFAULT NULL,
  `Inv_Quantity` int(11) NOT NULL,
  PRIMARY KEY (`Inv_Item_ID`),
  KEY `Store_ID` (`Store_ID`),
  KEY `Item_ID` (`Item_ID`),
  KEY `Inv_Item_ID` (`Inv_Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `inventory`
--

INSERT INTO `inventory` (`Inv_Item_ID`, `Store_ID`, `Item_ID`, `Inv_Quantity`) VALUES
(1, 1, 9, 1),
(2, 1, 8, 2),
(3, 1, 3, 7),
(4, 1, 7, 2),
(5, 1, 4, 5),
(6, 2, 6, 4),
(7, 2, 5, 4),
(8, 2, 2, 0),
(9, 2, 10, 7),
(10, 3, 1, 11);

--
-- Triggers `inventory`
--
DROP TRIGGER IF EXISTS `UpdateItemInStock0`;
DELIMITER $$
CREATE TRIGGER `UpdateItemInStock0` AFTER UPDATE ON `inventory` FOR EACH ROW BEGIN
UPDATE item JOIN inventory ON item.Item_ID = inventory.Item_ID SET item.Item_InStock = 0 WHERE inventory.Inv_Quantity = 0;
END
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `UpdateItemInStock1`;
DELIMITER $$
CREATE TRIGGER `UpdateItemInStock1` AFTER UPDATE ON `inventory` FOR EACH ROW BEGIN
UPDATE item JOIN inventory ON item.Item_ID = inventory.Item_ID SET item.Item_InStock = 1 WHERE inventory.Inv_Quantity >= 1;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `Item_ID` int(20) NOT NULL,
  `Item_Name` varchar(20) DEFAULT NULL,
  `Item_Formality` varchar(10) DEFAULT NULL,
  `Item_Size` int(11) DEFAULT NULL,
  `Item_Brand` varchar(20) DEFAULT NULL,
  `Item_Type` text,
  `Item_Color` varchar(10) DEFAULT NULL,
  `Item_InStock` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`Item_ID`),
  KEY `Item_ID` (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`Item_ID`, `Item_Name`, `Item_Formality`, `Item_Size`, `Item_Brand`, `Item_Type`, `Item_Color`, `Item_InStock`) VALUES
(1, 'Terry pants', 'Casual', 4, 'Nike', 'Bottom', 'Blue', 1),
(2, 'Striped pants', 'Casual', 3, 'Adidas', 'Bottom', 'Red', 0),
(3, 'Cloth pants', 'Casual', 3, 'American Eagle', 'Bottom', 'Black', 1),
(4, 'Jason pants', 'Formal', 3, 'Adidas', 'Bottom', 'Green', 1),
(5, 'Purple pants', 'Casual', 3, 'Adidas', 'Bottom', 'Purple', 1),
(6, 'Skate shoes', 'Casual', 3, 'J Crew', 'Shoe', 'Grey', 1),
(7, 'Formal brown shoes', 'Casual', 3, 'Adidas', 'Shoe', 'Brown', 1),
(8, 'Hi-Top Sneakers', 'Casual', 3, 'Tommy Hilfiger', 'Shoe', 'White', 1),
(9, 'Green shoes', 'Casual', 3, 'Adidas', 'Shoe', 'Green', 1),
(10, 'Blue shoes', 'Formal', 3, 'Nike', 'Shoe', 'Blue', 1),
(11, 'Henley shirt', 'Casual', 2, 'J Crew', 'Top', 'Brown', 0),
(12, 'Cloth shirt', 'Casual', 2, 'American Eagle', 'Top', 'Black', 0),
(13, 'Button-down shirt', 'Formal', 1, 'J Crew', 'Top', 'White', 0),
(14, 'Leather shirt', 'Formal', 3, 'J Crew', 'Top', 'Black', 0),
(15, 'Crazy shirt', 'Casual', 4, 'J Crew', 'Top', 'Brown', 0),
(16, 'Black underwear', 'Formal', 2, 'American Eagle', 'Undergarment', 'Black', 0),
(17, 'Yellow underwear', 'Formal', 1, 'Tommy Hilfiger', 'Undergarment', 'Yellow', 0),
(18, 'Striped underwear', 'Casual', 3, 'J Crew', 'Undergarment', 'Green', 0),
(19, 'Dotted underwear', 'Formal', 4, 'J Crew', 'Undergarment', 'Purple', 0),
(20, 'Grey underwear', 'Casual', 4, 'J Crew', 'Undergarment', 'Grey', 0);

-- --------------------------------------------------------

--
-- Table structure for table `item_list`
--

DROP TABLE IF EXISTS `item_list`;
CREATE TABLE IF NOT EXISTS `item_list` (
  `Inv_Item_ID` int(20) NOT NULL,
  `Pur_ID` int(20) NOT NULL,
  `IL_Price` decimal(10,2) DEFAULT NULL,
  `IL_Quantity` int(11) NOT NULL,
  PRIMARY KEY (`Inv_Item_ID`,`Pur_ID`),
  KEY `Inv_Item_ID` (`Inv_Item_ID`),
  KEY `Pur_ID` (`Pur_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `item_list`
--

INSERT INTO `item_list` (`Inv_Item_ID`, `Pur_ID`, `IL_Price`, `IL_Quantity`) VALUES
(1, 1, '20.00', 5),
(2, 1, '31.99', 2),
(3, 1, '25.99', 6),
(4, 2, '25.39', 3),
(5, 2, '21.22', 7),
(6, 2, '16.00', 4),
(7, 3, '21.99', 3),
(8, 3, '35.23', 2),
(9, 4, '22.99', 1),
(10, 4, '23.99', 2);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
CREATE TABLE IF NOT EXISTS `purchase` (
  `Pur_ID` int(20) NOT NULL,
  `Cust_ID` int(20) DEFAULT NULL,
  `Clerk_ID` int(20) DEFAULT NULL,
  `Pur_Date` date DEFAULT NULL,
  `Store_ID` int(20) NOT NULL,
  PRIMARY KEY (`Pur_ID`),
  KEY `Cust_ID` (`Cust_ID`),
  KEY `Clerk_ID` (`Clerk_ID`),
  KEY `Store_ID` (`Store_ID`),
  KEY `Pur_ID` (`Pur_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`Pur_ID`, `Cust_ID`, `Clerk_ID`, `Pur_Date`, `Store_ID`) VALUES
(1, 2, 4, '2015-05-10', 1),
(2, 3, 9, '2015-05-12', 2),
(3, 5, 4, '2016-08-13', 3),
(4, 2, 2, '2016-04-11', 4),
(5, 7, 3, '2016-01-11', 1),
(6, 9, 1, '2017-02-12', 2),
(7, 6, 5, '2017-02-15', 3),
(8, 1, 6, '2018-03-10', 4),
(9, 5, 8, '2018-04-10', 1),
(10, 1, 2, '2018-05-10', 3);

-- --------------------------------------------------------

--
-- Table structure for table `shoe`
--

DROP TABLE IF EXISTS `shoe`;
CREATE TABLE IF NOT EXISTS `shoe` (
  `Item_ID` int(20) NOT NULL,
  `Shoe_Fastening` varchar(30) DEFAULT NULL,
  `Shoe_Rise` varchar(30) DEFAULT NULL,
  `Shoe_Design` varchar(30) DEFAULT NULL,
  `Shoe_SoleType` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `shoe`
--

INSERT INTO `shoe` (`Item_ID`, `Shoe_Fastening`, `Shoe_Rise`, `Shoe_Design`, `Shoe_SoleType`) VALUES
(6, 'Velcro', 'High', 'Cartoon', 'Stiff'),
(7, 'Sturdy lace', 'Medium', 'Pattern', 'Soft'),
(8, 'Sturdy lace', 'Low', 'Shape', 'Mellow'),
(9, 'Lace', 'Low', 'Pattern', 'Mellow'),
(10, 'Velcro', 'High', 'Cartoon', 'Stiff');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

DROP TABLE IF EXISTS `store`;
CREATE TABLE IF NOT EXISTS `store` (
  `Store_ID` int(20) NOT NULL,
  `Store_State` text,
  `Store_City` text,
  `Store_StreetAddress` varchar(25) DEFAULT NULL,
  `Store_ZipCode` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`Store_ID`),
  KEY `Store_ID` (`Store_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`Store_ID`, `Store_State`, `Store_City`, `Store_StreetAddress`, `Store_ZipCode`) VALUES
(1, 'VA', 'Alexandria', '202 Duke St', '22303'),
(2, 'VA', 'Blacksburg', '404 Rodeo Dr', '24060'),
(3, 'VA', 'Christiansburg', '505 Orange St', '35020'),
(4, 'CA', 'Los Angeles', '606 State Dr', '21020');

-- --------------------------------------------------------

--
-- Table structure for table `top`
--

DROP TABLE IF EXISTS `top`;
CREATE TABLE IF NOT EXISTS `top` (
  `Item_ID` int(20) NOT NULL,
  `Top_SleeveType` varchar(30) DEFAULT NULL,
  `Top_CollarStyle` varchar(30) DEFAULT NULL,
  `Top_Design` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `top`
--

INSERT INTO `top` (`Item_ID`, `Top_SleeveType`, `Top_CollarStyle`, `Top_Design`) VALUES
(11, 'Folded', 'Out', 'Solid'),
(12, 'Folded', 'None', 'Striped'),
(13, 'Frayed', 'None', 'Multi'),
(14, 'Clean', 'Out', 'Striped'),
(15, 'Frayed', 'None', 'Multi');

-- --------------------------------------------------------

--
-- Table structure for table `under_garment`
--

DROP TABLE IF EXISTS `under_garment`;
CREATE TABLE IF NOT EXISTS `under_garment` (
  `Item_ID` int(20) NOT NULL,
  `UG_Length` varchar(30) DEFAULT NULL,
  `UG_Style` varchar(30) DEFAULT NULL,
  `UG_Design` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Item_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `under_garment`
--

INSERT INTO `under_garment` (`Item_ID`, `UG_Length`, `UG_Style`, `UG_Design`) VALUES
(16, 'Middle', 'Brief', 'Solid'),
(17, 'Long', 'Boxer', 'Dotted'),
(18, 'Long', 'Boxer', 'Multi'),
(19, 'Short', 'Brief', 'Dotted'),
(20, 'Short', 'Brief', 'Multi');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bottom`
--
ALTER TABLE `bottom`
  ADD CONSTRAINT `bottom_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `item` (`Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`Store_ID`) REFERENCES `store` (`Store_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`Item_ID`) REFERENCES `item` (`Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `item_list`
--
ALTER TABLE `item_list`
  ADD CONSTRAINT `item_list_ibfk_1` FOREIGN KEY (`Inv_Item_ID`) REFERENCES `inventory` (`Inv_Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `item_list_ibfk_2` FOREIGN KEY (`Pur_ID`) REFERENCES `purchase` (`Pur_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`Cust_ID`) REFERENCES `customer` (`Cust_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_ibfk_2` FOREIGN KEY (`Clerk_ID`) REFERENCES `clerk` (`Clerk_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_ibfk_3` FOREIGN KEY (`Store_ID`) REFERENCES `store` (`Store_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `shoe`
--
ALTER TABLE `shoe`
  ADD CONSTRAINT `shoe_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `item` (`Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `top`
--
ALTER TABLE `top`
  ADD CONSTRAINT `top_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `item` (`Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `under_garment`
--
ALTER TABLE `under_garment`
  ADD CONSTRAINT `under_garment_ibfk_1` FOREIGN KEY (`Item_ID`) REFERENCES `item` (`Item_ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
