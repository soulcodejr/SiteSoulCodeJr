package com.soulCodeJr.backEndSite.controllers;

import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/candidates")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @GetMapping
    public ResponseEntity<Page<Candidate>> findAll(
            @PageableDefault(size = 5, sort = "name") Pageable pageable
    ) {
        Page<Candidate> candidates = candidateService.findAll(pageable);
        return ResponseEntity.ok(candidates);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Candidate> findById(@PathVariable Long id) {
        Candidate candidate = candidateService.findById(id);
        return ResponseEntity.ok().body(candidate);
    }

    @PostMapping
    public Candidate addNewCandidate(@RequestBody Candidate candidate) {
        return candidateService.addNewCandidate(candidate);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Candidate> deleteCandidateById(@PathVariable Long id)
    {
        candidateService.deleteCandidateById(id);
        return ResponseEntity.noContent().build(); // 204 Success
    }
}
