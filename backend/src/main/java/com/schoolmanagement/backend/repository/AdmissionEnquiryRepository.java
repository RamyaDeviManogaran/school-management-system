package com.schoolmanagement.backend.repository;

import com.schoolmanagement.backend.model.AdmissionEnquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmissionEnquiryRepository extends JpaRepository<AdmissionEnquiry, Integer> {
    // No methods needed yet — JpaRepository already gives us:
    // save(), findAll(), findById(), deleteById(), and more, for free.
}