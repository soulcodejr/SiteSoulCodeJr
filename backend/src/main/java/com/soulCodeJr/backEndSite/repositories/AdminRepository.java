package com.soulCodeJr.backEndSite.repositories;

import com.soulCodeJr.backEndSite.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdminRepository extends JpaRepository<Admin,Long> {

    Optional<Admin> findByEmail(String email);

}
