using System;

namespace Classes
{
    public class Person
    {
        public string Name;

        public void Introduce(string to)
        {
            Console.WriteLine( "hi {0} I {1}",to,Name);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
var person = new Person();
person.Name = "john";
person.Introduce("mosh");
Console.ReadKey();
        }
    }
}