using System.ComponentModel.DataAnnotations;

namespace Ubootstrap.Logic.Views.Partial
{
    public class ContactFormModel
    {
        [Required(ErrorMessage = @"Please enter your name")]
        public string Name { get; set; }

        [Display(Name = "Address")]
        public string AddressLineOne { get; set; }

        [Display(Name = "Address Line 2")]
        public string AddressLineTwo { get; set; }

        [Required(ErrorMessage = @"Email address required")]
        [RegularExpression(@"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?", ErrorMessage = @"Please enter a valid e-mail address")]
        public string Email { get; set; }

        [Required(ErrorMessage = @"Please enter a message")]
        [DataType(DataType.MultilineText)]
        public string Message { get; set; }
    }
}