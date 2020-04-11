package io.github.dougllasfps.clientes.model.repository;

import io.github.dougllasfps.clientes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
