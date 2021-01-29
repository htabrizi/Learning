USE [Iranhotel]
GO

/****** Object:  Table [dbo].[RoomReservations]    Script Date: 1/29/2021 5:19:24 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[RoomReservations2](
	[ReservationID] [int] IDENTITY(1,1) NOT NULL,
	[GuestID] [int] NOT NULL,
	[CheckInDate] [date] NOT NULL,
	[CheckOutDate] [date] NOT NULL,
	[RoomNumber] [char](3) NOT NULL,
 CONSTRAINT [PK_RoomReservations] PRIMARY KEY CLUSTERED 
(
	[ReservationID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[RoomReservations]  WITH CHECK ADD  CONSTRAINT [FK_RoomReservations_Guests] FOREIGN KEY([GuestID])
REFERENCES [dbo].[Guests] ([GuestId])
GO

ALTER TABLE [dbo].[RoomReservations] CHECK CONSTRAINT [FK_RoomReservations_Guests]
GO


