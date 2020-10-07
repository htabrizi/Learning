/*using System;
 

namespace Classes
{
    public class Person
    {
        public string Name;

        public void Introduce(string to)
        {
            Console.WriteLine( "hi {0} I am {1}",to,Name);
        }
    

    public static Person Parse(string str)
    {
     var person = new Person(); 
        person.Name=str ;
      return person;

    }

    }
    class Program
    {
        static void Main(string[] args)
        {
           // var person = new Person();
            //person.Name = "john";
            var person = Person.Parse("John");
            person.Introduce("mosh");
            Console.ReadKey();
        }
    }
}
*/


//using System;
//using System.Collections.Generic;

//namespace CSharp
//{
//    class program
//    {
//        static void Main(string[] args)
//        {
//            var customer=new customer( );

//            var order=new order();
//             customer.Orders.Add(order);


//            Console.WriteLine(customer.Id);
//            Console.WriteLine(customer.Name);
//            Console.ReadKey();
//            review1

//        }
//    }
//}

using System;

namespace Methods
{

    class Program
    {
        static void Main(string[] args)
        {
            var point=new Point(10,20);
            point.Move(null);
            Console.WriteLine("point is at ({0},{1})",point.X,point.Y);

            point.Move(100,200);
            Console.WriteLine("point is at ({0},{1})", point.X, point.Y);
            Console.ReadKey();
        }


    }
}