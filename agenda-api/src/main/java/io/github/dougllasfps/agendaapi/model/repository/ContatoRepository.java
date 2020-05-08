package io.github.dougllasfps.agendaapi.model.repository;

import io.github.dougllasfps.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {

    @Query("update Contato c set favorito = ?2 where c = ?1")
    @Modifying
    void updateFavorito(Contato contato, Boolean favorito);

}
