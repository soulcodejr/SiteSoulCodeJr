package com.soulCodeJr.backEndSite.dto;


import jakarta.validation.constraints.NotBlank;

public class EmailDTO {


    private String owner;

    @NotBlank(message = "Campo requerido")
    private String fromWho;

    @NotBlank(message = "Campo requerido")
    private String toWho;

    @NotBlank(message = "Campo requerido")
    private String tittle;

    @NotBlank(message = "Campo requerido")
    private String message;

    public EmailDTO(){}

    public EmailDTO(String owner, String fromWho, String tittle, String toWho, String message) {
        this.owner = owner;
        this.fromWho = fromWho;
        this.tittle = tittle;
        this.toWho = toWho;
        this.message = message;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getToWho() {
        return toWho;
    }

    public void setToWho(String toWho) {
        this.toWho = toWho;
    }

    public String getFromWho() {
        return fromWho;
    }

    public void setFromWho(String fromWho) {
        this.fromWho = fromWho;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
