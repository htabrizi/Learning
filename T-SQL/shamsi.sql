DECLARE @date Datetime =getdate()
select @date
select format(@date,'yyyy/MM/dd','fa-ir')
select format(@date,'yyyy/MM/dd HH:MM:ss','fa-ir')