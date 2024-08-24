package com.sbstudentsystem.StudentBackend.exception;

public class StudentAlreadyExistsException extends RuntimeException {

    public StudentAlreadyExistsException(String message) {

        super(message);
    }
}
