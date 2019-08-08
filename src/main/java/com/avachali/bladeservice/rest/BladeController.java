package com.avachali.bladeservice.rest;

import com.avachali.bladeservice.model.Blade;
import com.avachali.bladeservice.repo.BladeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
public class BladeController {

    @Autowired
    BladeRepository bladeRepository;

    @GetMapping("/v1/blades")
    public List<Blade> getAllBlades() {

        return (List<Blade>) bladeRepository.findAll();
    }
}
