select * from guests
select * from RoomReservations
select * from Rooms
select Guests.FirstName,
Guests.LastName,
RoomReservations.CheckInDate,
Rooms.rate
From Guests left join RoomReservations on Guests.GuestId=RoomReservations.GuestID
left join Rooms on RoomReservations.RoomNumber=Rooms.RoomNumber

