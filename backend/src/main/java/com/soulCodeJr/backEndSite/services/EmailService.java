package com.soulCodeJr.backEndSite.services;


import com.soulCodeJr.backEndSite.dto.EmailDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender sender;


    public void externalEmail(EmailDTO dto){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(dto.getFromWho());
        message.setReplyTo(dto.getFromWho()); 
        message.setTo(dto.getToWho());
        message.setSubject(dto.getTittle());
        message.setText("De: " + dto.getFromWho() + "\n\n" + dto.getMessage());

        sender.send(message);

    }

    public void internalEmail(EmailDTO dto){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(dto.getFromWho());
        message.setTo(dto.getToWho());
        message.setSubject(dto.getTittle());
        message.setText("Olá, " + dto.getOwner() + "\n\n" + dto.getMessage());

        sender.send(message);

    }


}
