using System;
using System.Collections.Generic;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {

            var sentence = "this is going to realy realy realy long text.";
            var summary = StringUtility.SummerizeText(sentence);
            Console.WriteLine(summary,25);
        }


    }
}

review1
    review2