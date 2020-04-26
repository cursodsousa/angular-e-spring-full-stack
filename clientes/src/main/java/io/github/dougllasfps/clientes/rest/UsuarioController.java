package io.github.dougllasfps.clientes.rest;

import io.github.dougllasfps.clientes.model.entity.Usuario;
import io.github.dougllasfps.clientes.model.repository.UsuarioRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioRepository repository;
    private final PasswordEncoder encoder;

    @PostMapping
    public void salvar( @RequestBody @Valid Usuario usuario ){
        usuario.setPassword(encoder.encode(usuario.getPassword()));
        repository.save(usuario);
    }

}
