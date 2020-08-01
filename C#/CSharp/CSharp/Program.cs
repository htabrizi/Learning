using System;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {

            var fullName = "  Mosh Hamedani  ";
            Console.WriteLine("trim:'{0}'", fullName.Trim());
            Console.WriteLine("ToUpper:'{0}'", fullName.Trim().ToUpper());
            var index = fullName.IndexOf(' ');
            var firstName = fullName.Substring(0, index);
            var lastName = fullName.Substring(index, 1);
            Console.WriteLine(firstName);
            Console.WriteLine(lastName);

            var names = fullName.Split(' ');
            Console.WriteLine(names[0]);
            Console.WriteLine(names[1]);
            Console.WriteLine(fullName.Replace("mosh", "mo"));
            if (String.IsNullOrWhiteSpace(" "))
                Console.WriteLine("invalid");
            var str = "25";
            Convert.ToInt32(str);
            Console.WriteLine(str);
            float price = 12.12f;
            Console.WriteLine(price.ToString("C"));
        }
    }
}
