package com.soulCodeJr.backEndSite.services;


import com.soulCodeJr.backEndSite.dto.EmailDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender sender;

    public void sendEmail(EmailDTO dto){

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(dto.getFromWho());
        message.setReplyTo(dto.getFromWho()); 
        message.setTo(dto.getToWho());
        message.setSubject(dto.getTittle());
        message.setText("De: " + dto.getFromWho() + "\n\n" + dto.getMessage());

        sender.send(message);

    }
}
