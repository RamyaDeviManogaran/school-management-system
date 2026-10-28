package com.schoolmanagement.backend.controller;

import com.schoolmanagement.backend.model.Teacher;
import com.schoolmanagement.backend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teachers")
@CrossOrigin(origins = "http://localhost:5173")
public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    @GetMapping
    public List<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    @GetMapping("/{id}")
    public Teacher getTeacherById(@PathVariable Integer id) {
        return teacherRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Teacher createTeacher(@RequestBody Teacher teacher) {
        return teacherRepository.save(teacher);
    }

    @PutMapping("/{id}")
    public Teacher updateTeacher(@PathVariable Integer id, @RequestBody Teacher updatedTeacher) {
        return teacherRepository.findById(id).map(teacher -> {
            teacher.setFullName(updatedTeacher.getFullName());
            teacher.setQualification(updatedTeacher.getQualification());
            teacher.setDepartment(updatedTeacher.getDepartment());
            teacher.setPhone(updatedTeacher.getPhone());
            return teacherRepository.save(teacher);
        }).orElse(null);
    }

    @DeleteMapping("/{id}")
    public String deleteTeacher(@PathVariable Integer id) {
        teacherRepository.deleteById(id);
        return "Teacher deleted successfully";
    }
}