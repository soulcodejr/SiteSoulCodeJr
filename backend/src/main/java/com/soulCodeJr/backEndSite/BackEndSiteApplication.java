package com.soulCodeJr.backEndSite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class BackEndSiteApplication {




	public static void main(String[] args) {
		SpringApplication.run(BackEndSiteApplication.class, args);

		System.out.println(new BCryptPasswordEncoder().encode("123"));
	}



}
