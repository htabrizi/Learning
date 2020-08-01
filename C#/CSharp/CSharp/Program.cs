using System;
using System.Collections.Generic;

namespace CSharp
{
    class Program
    {
        static void Main(string[] args)
        {

            var sentence = "this is going to realy realy realy long text.";
            var summary = SummerizeText(sentence);
            Console.WriteLine(summary,25);
        }

        static string SummerizeText(string text, int maxlength = 20)
        {
            
            if (text.Length < maxlength)
                return text;
       
            var words = text.Split(' ');
            var totalCharacters = 0;
            var summaryWords = new List<string>();
            foreach (var word in words)
            {
                summaryWords.Add(word);
                totalCharacters += word.Length + 1;
                if (totalCharacters > maxlength)
                    break;

            }

            return String.Join(" ", summaryWords) + "...";
            
           
        }

    }
}
