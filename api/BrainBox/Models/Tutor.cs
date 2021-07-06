using System;
using System.Collections.Generic;

namespace BrainBox.Models {
  public class Tutor {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string EmailAddress { get; set; }
    public string UserName { get; set; }
    public DateTime DateOfBirth { get; set; }
    public List<string> Subjects { get; set; }
  }
}