package com.soulCodeJr.backEndSite.services;

import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.exception.UserIndicatorNotFoundException;
import com.soulCodeJr.backEndSite.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;

    public Page<Candidate> findAll(Pageable pageable) {
        return candidateRepository.findAll(pageable);
    }

    public Candidate findById(Long id) {
        return candidateRepository.findById(id).get();
    }

    public Candidate addNewCandidate(Candidate candidate) {
        return candidateRepository.save(candidate);
    }

    public void deleteCandidateById(Long id)
    {
        if(!candidateRepository.existsById(id)) {
            throw new UserIndicatorNotFoundException("ID não encontrada");
        }
        candidateRepository.deleteById(id);
    }
}
