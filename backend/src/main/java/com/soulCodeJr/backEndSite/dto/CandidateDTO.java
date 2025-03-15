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
        id = candidate.getId();
        name = candidate.getName();
        email = candidate.getEmail();
        registration = candidate.getRegistration();
        sector = candidate.getSector();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getRegistration() {
        return registration;
    }

    public String getEmail() {
        return email;
    }

    public String getSector() {
        return sector;
    }
}
