using System;
using System.Linq;
using BrainBox.Models;
using System.Collections.Generic;

namespace BrainBox.Services {
  public static class TutorService {
    public static List<Tutor> Tutors { get; }
    private static int nextId = 3;
    static TutorService() {
      Tutors = new List<Tutor> {
        new Tutor {
          Id = 1,
          FirstName = "Alex",
          LastName = "Brain",
          EmailAddress = "alex@brainbox.co.nz",
          UserName = "abrain123",
          Subjects = new List<string> { "physics", "english", "biology" },
          DateOfBirth = new DateTime(1997, 1, 1)
        },
        new Tutor {
          Id = 2,
          FirstName = "Braxton",
          LastName = "Box",
          EmailAddress = "braxton@brainbox.co.nz",
          UserName = "bbox123",
          Subjects = new List<string> { "physical education", "calculus", "english" },
          DateOfBirth = new DateTime(1995, 6, 3)
        }
      };
    }

    public static List<Tutor> GetAll() => Tutors;
    public static Tutor Get(int id) => Tutors.FirstOrDefault(t => t.Id == id);

    public static void Add(Tutor tutor) {
      tutor.Id = nextId++;
      Tutors.Add(tutor);
    }

    public static void Delete(int id) {
      var tutor = Get(id);
      if (tutor is null) return;
      Tutors.Remove(tutor);
    }

    public static void Update(Tutor tutor) {
      var index = Tutors.FindIndex(t => t.Id == tutor.Id);
      if (index == -1) return;
      Tutors[index] = tutor;
    }
  }
}