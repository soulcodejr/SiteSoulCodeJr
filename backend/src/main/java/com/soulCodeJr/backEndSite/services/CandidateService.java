package com.soulCodeJr.backEndSite.services;

import com.soulCodeJr.backEndSite.dto.CandidateDTO;
import com.soulCodeJr.backEndSite.dto.EmailDTO;
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
    @Autowired
    private EmailService emailService;

    @Transactional(readOnly = true)
    public Page<CandidateDTO> findAll(Pageable pageable) {
       Page<Candidate> candidates = candidateRepository.findAll(pageable);
        return candidates.map(CandidateDTO::new);
    }

    public CandidateDTO addNewCandidate(CandidateDTO dto) {
        Candidate candidate = new Candidate();
        dtoToEntity(dto,candidate);
        candidate = candidateRepository.save(candidate);

        var sendEmail = sendEmail(candidate);

        emailService.internalEmail(sendEmail);

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

    private void dtoToEntity(CandidateDTO dto, Candidate entity){

        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setRegistration(dto.getRegistration());
        entity.setSector(dto.getSector());

    }

    private EmailDTO sendEmail(Candidate candidate){

        var email = new EmailDTO();

        email.setOwner(candidate.getName());
        email.setFromWho("...");
        email.setToWho(candidate.getEmail());
        email.setTittle("SoulCode Jr: Inscrição no processo seletivo confirmada");
        email.setMessage("\uD83C\uDF89 Parabéns pela sua inscrição! \uD83D\uDE80\n" +
                "\n" +
                "Você deu um passo importante rumo a uma jornada cheia de aprendizado, colaboração e impacto real com a Empresa Júnior SoulCode! \uD83D\uDCBC\uD83D\uDCBB\n" +
                "\n" +
                "Estamos muito felizes em ter você com a gente nesse processo seletivo. Sua iniciativa mostra que você está pronto(a) para crescer, encarar desafios e fazer parte de um time que transforma ideias em experiências reais de mercado! \uD83D\uDCA1\uD83D\uDD25\n" +
                "\n" +
                "\uD83D\uDCDD E agora, o que vem por aí?\n" +
                "Nos próximos dias, você receberá por e-mail todos os detalhes sobre as próximas etapas do processo — então fique de olho na sua caixa de entrada (e no spam também, só por precaução \uD83D\uDE04).\n" +
                "\n" +
                "Seja muito bem-vindo(a)! Estamos torcendo por você e ansiosos para conhecer mais sobre o seu potencial!\n" +
                "\n");

        return email;

    }


}
