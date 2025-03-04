package com.soulCodeJr.backEndSite.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()) // Permite todas as requisições
                .csrf(csrf -> csrf.disable()) // Desativa a proteção CSRF (necessário para métodos POST)
                .formLogin(form -> form.disable()) // Remove a tela de login
                .httpBasic(basic -> basic.disable()); // Remove autenticação básica

        return http.build();
    }
}