package com.soulCodeJr.backEndSite.services;


import com.soulCodeJr.backEndSite.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdminService implements UserDetailsService {

	@Autowired
	private AdminRepository repository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		var admin = repository.findByEmail(email).
				orElseThrow(() -> new UsernameNotFoundException("Email não encontrado"));
		return new org.springframework.security.core.userdetails.User(admin.getUsername(),
				admin.getPassword(),true,true,true,true,admin.getAuthorities());
	}


}
