package com.sbstudentsystem.StudentBackend.repository;

import com.sbstudentsystem.StudentBackend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepository extends JpaRepository<Student, Long> {

    Optional<Student> findByEmail(String email);
}
