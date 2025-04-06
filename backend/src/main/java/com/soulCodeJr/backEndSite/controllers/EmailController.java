package com.soulCodeJr.backEndSite.controllers;


import com.soulCodeJr.backEndSite.dto.EmailDTO;
import com.soulCodeJr.backEndSite.services.EmailService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/email")
public class EmailController {

    @Autowired
    private EmailService service;

    @PostMapping(value = "/external")
    public ResponseEntity<EmailDTO> sendEmailExternal(@Valid @RequestBody EmailDTO dto){

        service.externalEmail(dto);
        return ResponseEntity.ok(dto);

    }

    @PostMapping(value = "/internal")
    public ResponseEntity<EmailDTO> sendEmailInternal(@Valid @RequestBody EmailDTO dto){
        service.internalEmail(dto);
        return ResponseEntity.ok(dto);
    }

}
