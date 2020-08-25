USE [cat_app]
GO

/****** Object:  Table [dbo].[cats]    Script Date: 8/25/2020 10:40:12 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[cats](
	[cat_id] [int] NOT NULL,
	[name] [varchar](100) NULL,
	[breed] [varchar](100) NULL,
	[age] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[cat_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

select name,age from cats
select * from cats where name='egg';

select cat_id,age from cats where cat_id=age