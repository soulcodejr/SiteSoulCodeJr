package com.soulCodeJr.backEndSite.controllers.handlers;

import com.soulCodeJr.backEndSite.dto.CustomErrorDTO;
import com.soulCodeJr.backEndSite.dto.ValidationErrorDTO;
import com.soulCodeJr.backEndSite.exception.DatabaseException;
import com.soulCodeJr.backEndSite.exception.MethodArgumentNotValidException;
import com.soulCodeJr.backEndSite.exception.ResourceNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<CustomErrorDTO> resourceNotFound(ResourceNotFoundException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.NOT_FOUND;
        CustomErrorDTO err = new CustomErrorDTO(Instant.now(), status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }

    @ExceptionHandler(DatabaseException.class)
    public ResponseEntity<CustomErrorDTO> database(DatabaseException e, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        CustomErrorDTO err = new CustomErrorDTO(Instant.now(), status.value(), e.getMessage(), request.getRequestURI());
        return ResponseEntity.status(status).body(err);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<CustomErrorDTO> methodArgumentNotValidation(org.springframework.web.bind.MethodArgumentNotValidException error, HttpServletRequest request) {
        HttpStatus status = HttpStatus.BAD_REQUEST;
        ValidationErrorDTO err = new ValidationErrorDTO(Instant.now(), status.value(), "Dados inválidos", request.getRequestURI());
        for (FieldError f : error.getBindingResult().getFieldErrors()) {
            err.addError(f.getField(), f.getDefaultMessage());
        }
        return ResponseEntity.status(status).body(err);
    }


}
