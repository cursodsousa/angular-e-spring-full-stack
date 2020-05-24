package io.github.dougllasfps.agendaapi.model.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter@Setter
@NoArgsConstructor
public class Contato {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(length = 150, nullable = false)
    private String nome;
    @Column(length = 150, nullable = false)
    private String email;
    @Column
    private Boolean favorito;
    @Column
    @Lob
    private byte[] foto;
}
