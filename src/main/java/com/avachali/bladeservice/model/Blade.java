package com.avachali.bladeservice.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "BLADES")
public class Blade {

    @Id
    @GeneratedValue
    @Column(name = "ID", nullable = false)
    private long id;
    @Column(name = "NAME", length = 64, nullable = false)
    private String name;
    private int stars;
    private String notes;
}
