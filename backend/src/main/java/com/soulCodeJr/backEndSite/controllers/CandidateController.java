package com.soulCodeJr.backEndSite.controllers;

import com.soulCodeJr.backEndSite.dto.CandidateDTO;
import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/candidates")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @GetMapping
    public ResponseEntity<Page<CandidateDTO>> findAll(Pageable pageable) {
        Page<CandidateDTO> dto = candidateService.findAll(pageable);
        return ResponseEntity.ok(dto);
    }

    @PostMapping(value = "/insert")
    public ResponseEntity<CandidateDTO> addNewCandidate(@RequestBody CandidateDTO candidate) {

        candidate = candidateService.addNewCandidate(candidate);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(candidate.getId()).toUri();
        return ResponseEntity.created(uri).body(candidate);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCandidateById(@PathVariable Long id)
    {
        candidateService.deleteCandidateById(id);
        return ResponseEntity.noContent().build();
    }

}
