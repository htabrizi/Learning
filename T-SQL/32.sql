select * from guests
select * from RoomReservations
select * from Rooms
select Guests.FirstName,
Guests.LastName,
RoomReservations.CheckInDate,
Rooms.rate
From Guests inner join RoomReservations on Guests.GuestId=RoomReservations.GuestID
inner join Rooms on RoomReservations.RoomNumber=Rooms.RoomNumber