package com.soulCodeJr.backEndSite.dto;

import com.soulCodeJr.backEndSite.entities.Candidate;

public class CandidateDTO {

    private Long id;
    private String name;
    private String registration;
    private String email;
    private String sector;

    public CandidateDTO(){}

    public CandidateDTO(Candidate candidate){

        this.name = candidate.getName();
        this.email = candidate.getEmail();
        this.registration = candidate.getRegistration();
        this.sector = candidate.getSector();

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSector() {
        return sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }
}
