package com.soulCodeJr.backEndSite.controllers.handlers;

import com.soulCodeJr.backEndSite.dto.CustomErrorDTO;
import com.soulCodeJr.backEndSite.dto.ValidationErrorDTO;
import com.soulCodeJr.backEndSite.exception.ErrorMessage;
import com.soulCodeJr.backEndSite.exception.MethodArgumentNotValidException;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.Instant;

@ControllerAdvice
public class ControllerExceptionHandler {
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorMessage> handleRuntimeException(RuntimeException e) {
        ErrorMessage error = new ErrorMessage(e.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
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
