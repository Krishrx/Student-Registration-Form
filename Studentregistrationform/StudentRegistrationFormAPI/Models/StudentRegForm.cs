using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace StudentRegistrationFormAPI.Models
{
    public class StudentRegForm
    {
        [Key]
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int BirthDay { get; set; }
        public string BirthMonth { get; set; }
        public int BirthYear { get; set; }
        public string EmailId { get; set; }
        public string MobileNo  { get; set; }
        public string Gender { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int Pincode { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string[] Hobbies { get; set; }
        public string SSLCBoard { get; set; }
        public double SSLCPercentage { get; set; }
        public int SSLCYearOfPassing { get; set; }
        public string HSCBoard { get; set; }
        public double HSCPercentage { get; set; }
        public int HSCYearOfPassing { get; set; }
        public string UGBoard { get; set; }
        public double UGPercentage { get; set; }
        public int UGYearOfPassing { get; set; }
        public string PGBoard { get; set; }
        public double PGPercentage { get; set; }
        public int PGYearOfPassing { get; set; }
        public string Course { get; set; }



    }
}
