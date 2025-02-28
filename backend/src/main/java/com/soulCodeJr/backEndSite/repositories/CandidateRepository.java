package com.soulCodeJr.backEndSite.repositories;

import com.soulCodeJr.backEndSite.entities.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidateRepository extends JpaRepository<Candidate, Long> {
}
