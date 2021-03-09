/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [SalesOrderID]
      ,[SalesOrderDetailID]
      ,[CarrierTrackingNumber]
      ,[OrderQty]
      ,[ProductID]
      ,[SpecialOfferID]
      ,[UnitPrice]
      ,[UnitPriceDiscount]
      ,[LineTotal]
      ,[rowguid]
      ,[ModifiedDate]
  FROM [AdventureWorks2017].[Sales].[SalesOrderDetail]
  



  select SalesOrderID 
  		,SUM(lineTotal)	AS orderTotal
		,sum (orderqty) as numberofItem
		, count (distinct ProductID) as uniqueitem
		,count(salesorderid) as unique2
  FROM [AdventureWorks2017].[Sales].[SalesOrderDetail]
  group by SalesOrderID



  select productid, sum(orderqty) as totalqtysold
  FROM [AdventureWorks2017].[Sales].[SalesOrderDetail]
  group by productid
  order by totalqtysold desc;

