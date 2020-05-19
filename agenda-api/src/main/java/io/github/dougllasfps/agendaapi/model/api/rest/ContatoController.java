package io.github.dougllasfps.agendaapi.model.api.rest;

import io.github.dougllasfps.agendaapi.model.entity.Contato;
import io.github.dougllasfps.agendaapi.model.repository.ContatoRepository;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Part;
import java.awt.print.Pageable;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/contatos")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ContatoController {

    private final ContatoRepository repository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contato save( @RequestBody Contato contato ){
        return repository.save(contato);
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete( @PathVariable Integer id ){
        repository.deleteById(id);
    }

    @GetMapping
    public Page<Contato> list(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "size", defaultValue = "10") Integer size){
        return repository.findAll(PageRequest.of(page, size));
    }

    @PatchMapping("{id}/favorito")
    public void favorite( @PathVariable Integer id ){
        Optional<Contato> contato = repository.findById(id);
        contato.ifPresent( c -> {
            boolean favorito = c.getFavorito() == Boolean.  TRUE;
            c.setFavorito(!favorito);
            repository.save(c);
        });
    }

    @PutMapping("{id}/foto")
    public byte[] addPhoto(@PathVariable Integer id, @RequestParam("foto")Part part){
        Optional<Contato> contato = repository.findById(id);
        return contato.map(c -> {
            try {
                InputStream inputStream = part.getInputStream();
                byte[] bytes = new byte[(int) part.getSize()];
                IOUtils.readFully(inputStream, bytes );
                c.setFoto(bytes);
                repository.save(c);
                inputStream.close();
                return bytes;
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        }).orElse(null);
    }
}
