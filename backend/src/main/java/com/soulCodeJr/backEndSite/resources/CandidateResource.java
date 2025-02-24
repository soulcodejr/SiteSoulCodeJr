package com.soulCodeJr.backEndSite.resources;

import com.soulCodeJr.backEndSite.dto.ErrorMessage;
import com.soulCodeJr.backEndSite.entities.Candidate;
import com.soulCodeJr.backEndSite.services.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/candidates")
public class CandidateResource {
    @Autowired
    private CandidateService candidateService;

    @GetMapping
    public ResponseEntity<List<Candidate>> findAll() {
        List<Candidate> candidates = candidateService.findAll();
        return ResponseEntity.ok().body(candidates);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<?> findById(@PathVariable Long id) {
        try {
            Candidate candidate = candidateService.findById(id);
            return ResponseEntity.ok().body(candidate);
        } catch (Exception e) {
            return ResponseEntity.status(404).body(new ErrorMessage(e.getMessage()));
        }
    }

    @PostMapping("/candidates")
    public Candidate addNewCandidate(@RequestBody Candidate candidate) {
        return candidateService.addNewCandidate(candidate);
    }
}
