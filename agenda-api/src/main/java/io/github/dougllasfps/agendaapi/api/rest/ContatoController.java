package io.github.dougllasfps.agendaapi.api.rest;

import io.github.dougllasfps.agendaapi.model.entity.Contato;
import io.github.dougllasfps.agendaapi.model.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contatos")
@RequiredArgsConstructor
public class ContatoController {

    private final ContatoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato save(@RequestBody @Valid Contato contato){
        return repository.save(contato);
    }

    @GetMapping
    public List<Contato> list(){
        return repository.findAll();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Integer id){
        repository.deleteById(id);
    }

    @PatchMapping("{id}/favorito}")
    public void favourite(
            @PathVariable Integer id,
            @RequestBody Boolean favorito){
        Optional<Contato> contato = repository.findById(id);
        contato.ifPresent( c -> {
            repository.updateFavorito(c, favorito);
        });
    }
}
