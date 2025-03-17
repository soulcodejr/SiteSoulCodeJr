package com.soulCodeJr.backEndSite.dto;



import java.time.Instant;
import java.util.ArrayList;
import java.util.List;



public class ValidationErrorDTO extends CustomErrorDTO {

    private final List<FieldMessageDTO> errors = new ArrayList<>();


    public ValidationErrorDTO(){}
    public ValidationErrorDTO(Instant timestamp, Integer status, String error, String path) {
        super(timestamp, status, error, path);
    }


    public void addError(String fieldName, String message) {
        errors.add(new FieldMessageDTO(fieldName, message));
    }

    public List<FieldMessageDTO> getErrors() {
        return errors;
    }
}
