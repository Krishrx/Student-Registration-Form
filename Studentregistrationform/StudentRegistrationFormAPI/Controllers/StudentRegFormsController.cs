using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentRegistrationFormAPI.Models;

namespace StudentRegistrationFormAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentRegFormsController : ControllerBase
    {
        private readonly StudentRegFormContext _context;

        public StudentRegFormsController(StudentRegFormContext context)
        {
            _context = context;
        }

        // GET: api/StudentRegForms/Get
        [HttpGet("Get")]
        public async Task<ActionResult<IEnumerable<StudentRegForm>>> GetStudentRegFormSet()
        {
            return await _context.StudentRegFormSet.ToListAsync();
        }

        // GET: api/StudentRegForms/Get/5
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<StudentRegForm>> GetStudentRegForm(long id)
        {
            var studentRegForm = await _context.StudentRegFormSet.FindAsync(id);

            if (studentRegForm == null)
            {
                return NotFound();
            }

            return studentRegForm;
        }

        // PUT: api/StudentRegForms/Update/5

        [HttpPut("Update/{id}")]
        public async Task<IActionResult> PutStudentRegForm(long id, StudentRegForm studentRegForm)
        {
            if (id != studentRegForm.Id)
            {
                return BadRequest();
            }

            _context.Entry(studentRegForm).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentRegFormExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentRegForms/Create

        [HttpPost("Create")]
        public async Task<ActionResult<StudentRegForm>> PostStudentRegForm(StudentRegForm studentRegForm)
        {
            _context.StudentRegFormSet.Add(studentRegForm);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentRegForm", new { id = studentRegForm.Id }, studentRegForm);
        }


        // DELETE: api/StudentRegForms/Delete/5
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteStudentRegForm(long id)
        {
            var studentRegForm = await _context.StudentRegFormSet.FindAsync(id);
            if (studentRegForm == null)
            {
                return NotFound();
            }

            _context.StudentRegFormSet.Remove(studentRegForm);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentRegFormExists(long id)
        {
            return _context.StudentRegFormSet.Any(e => e.Id == id);
        }
    }
}
