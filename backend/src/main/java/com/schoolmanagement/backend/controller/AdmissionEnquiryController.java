package com.schoolmanagement.backend.controller;

import com.schoolmanagement.backend.model.AdmissionEnquiry;
import com.schoolmanagement.backend.repository.AdmissionEnquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admissions")
@CrossOrigin(origins = "http://localhost:5173")
public class AdmissionEnquiryController {

    @Autowired
    private AdmissionEnquiryRepository repository;

    // Handles: POST http://localhost:8080/api/admissions
    // Called when someone submits the Admission Enquiry Form
    @PostMapping
    public AdmissionEnquiry createEnquiry(@RequestBody AdmissionEnquiry enquiry) {
        return repository.save(enquiry);
    }

    // Handles: GET http://localhost:8080/api/admissions
    // Will later power the Admin Dashboard's "Recent Admissions" panel
    @GetMapping
    public List<AdmissionEnquiry> getAllEnquiries() {
        return repository.findAll();
    }
}