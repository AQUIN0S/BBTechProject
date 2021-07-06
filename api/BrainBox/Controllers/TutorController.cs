using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using BrainBox.Models;
using BrainBox.Services;

namespace BrainBox.Controllers {
  [ApiController]
  [Route("api/[controller]")]
  public class TutorController : ControllerBase {
    public TutorController() { }

    [HttpGet]
    public ActionResult<List<Tutor>> GetAll() => TutorService.GetAll();

    [HttpGet("{id}")]
    public ActionResult<Tutor> Get(int id) {
      var tutor = TutorService.Get(id);
      if (tutor == null) return NotFound();
      return tutor;
    }

    [HttpPost]
    public IActionResult Create(Tutor tutor) {            
      TutorService.Add(tutor);
      return CreatedAtAction(nameof(Create), new { id = tutor.Id }, tutor);
    }

    [HttpPut("{id}")]
    public IActionResult Update(int id, Tutor tutor) {
      if (id != tutor.Id) return BadRequest();

      var existingTutor = TutorService.Get(id);
      if (existingTutor is null) return NotFound();

      TutorService.Update(tutor);           

      return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(int id) {
      var tutor = TutorService.Get(id);
      if (tutor is null) return NotFound();
      TutorService.Delete(id);
      return NoContent();
    }
  }
}