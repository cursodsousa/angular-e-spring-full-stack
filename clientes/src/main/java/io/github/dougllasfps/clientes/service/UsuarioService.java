package io.github.dougllasfps.clientes.service;

import io.github.dougllasfps.clientes.model.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usuarioRepository
                .findByUsername(username)
                .map( usuario -> User.builder()
                                    .username(usuario.getUsername())
                                    .password(usuario.getPassword())
                                    .roles("USER")
                                    .build()
                ).orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado"));
    }
}
