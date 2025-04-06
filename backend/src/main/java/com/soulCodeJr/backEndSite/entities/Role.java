package com.soulCodeJr.backEndSite.entities;

import com.soulCodeJr.backEndSite.enums.RoleName;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

@Entity
@Table(name = "tb_role")
public class Role implements GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, unique = true)
    private RoleName authority;


    @Override
    public String getAuthority() {
        return this.authority.toString();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAuthority(RoleName authority) {
        this.authority = authority;
    }
}
