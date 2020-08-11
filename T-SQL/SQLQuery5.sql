/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [RoomID]
      ,[RoomNumber]
      ,[BedType]
      ,[Rate]
  FROM [Iranhotel].[dbo].[Rooms]