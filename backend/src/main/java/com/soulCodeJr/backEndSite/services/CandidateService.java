package com.soulCodeJr.backEndSite.services;

import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;

    public List<Candidate> findAll() {
        return candidateRepository.findAll();
    }

    public Candidate findById(Long id) {
        return candidateRepository.findById(id).get();
    }

    public Candidate addNewCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }
}
