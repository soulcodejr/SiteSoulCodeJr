package com.soulCodeJr.backEndSite.services;

import com.soulCodeJr.backEndSite.dto.CandidateDTO;
import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.exception.UserIndicatorNotFoundException;
import com.soulCodeJr.backEndSite.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Transactional(readOnly = true)
    public Page<CandidateDTO> findAll(Pageable pageable) {
       Page<Candidate> candidates = candidateRepository.findAll(pageable);
        return candidates.map(CandidateDTO::new);
    }

    public CandidateDTO addNewCandidate(CandidateDTO dto) {

        Candidate candidate = new Candidate();
        dtoToEntity(dto,candidate);
        candidate = candidateRepository.save(candidate);
        return new CandidateDTO(candidate);

    }

    public void deleteCandidateById(Long id)
    {
        if(!candidateRepository.existsById(id)) {
            throw new UserIndicatorNotFoundException("ID não encontrada");
        }
        candidateRepository.deleteById(id);
    }

    public void dtoToEntity(CandidateDTO dto, Candidate entity){

        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setRegistration(dto.getRegistration());
        entity.setSector(dto.getSector());

    }

}
