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


using System;

namespace CSharp
{
    class program
    {
        static void Main(string[] args)
        {
            var customer=new customer();
            Console.WriteLine(customer.Id);
            Console.WriteLine(customer.Name);
        }
    }
}