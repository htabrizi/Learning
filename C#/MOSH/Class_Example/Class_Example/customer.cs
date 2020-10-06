using System.Collections.Generic;

namespace CSharp
{
    public class customer
    {
        public int Id;
        public string Name;
        public List<order> Orders;

        public customer(int id)
        {
            this.Id = id;

        }

        public customer(int id , string name)

        {
            this.Id = id;
            this.Name = name;
        }

        public customer()
        {
            //Orders= new List<order>();
        }
    }

} 