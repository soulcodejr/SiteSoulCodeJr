package com.soulCodeJr.backEndSite.services;

import com.soulCodeJr.backEndSite.dto.CandidateDTO;
import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.exception.DatabaseException;
import com.soulCodeJr.backEndSite.exception.ResourceNotFoundException;
import com.soulCodeJr.backEndSite.repositories.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
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

    @Transactional(propagation = Propagation.SUPPORTS)
    public void deleteCandidateById(Long id) {

        if (!candidateRepository.existsById(id)) {
            throw new ResourceNotFoundException("Recurso não encontrado");
        }
        try {
            candidateRepository.deleteById(id);
        }
        catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Falha de integridade referencial");
        }
    }

    public void dtoToEntity(CandidateDTO dto, Candidate entity){

        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setRegistration(dto.getRegistration());
        entity.setSector(dto.getSector());

    }

}
