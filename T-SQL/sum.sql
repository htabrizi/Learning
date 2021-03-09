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



  select  Product.Name ,SalesOrderDetail.productid
	
	, sum(salesorderdetail.orderqty) as totalqtysold
  FROM [AdventureWorks2017].[Sales].[SalesOrderDetail] left outer join [AdventureWorks2017].[Production].[Product]
	on AdventureWorks2017.sales.salesorderdetail.productid=AdventureWorks2017.production.product.productid

  group by salesorderdetail.productid ,product.name
  order by totalqtysold desc;

