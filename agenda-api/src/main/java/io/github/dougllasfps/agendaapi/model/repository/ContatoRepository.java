package io.github.dougllasfps.agendaapi.model.repository;

import io.github.dougllasfps.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}
