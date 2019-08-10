package com.avachali.bladeservice.rest;

import com.avachali.bladeservice.model.Blade;
import com.avachali.bladeservice.repo.BladeRepository;
import com.avachali.bladeservice.service.BladeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
public class BladeController {

    @Autowired
    BladeRepository bladeRepository;

    @Autowired
    BladeService bladeService;

    @GetMapping("/v1/blades")
    public List<Blade> getAllBlades() {

        return bladeService.getAllBlades();

    }

    @DeleteMapping("/v1/blades/{id}")
    public ResponseEntity<Void> deleteBlade(@PathVariable  long id) {

        bladeService.deleteBlade(id);

        return ResponseEntity.noContent().build();// status(HttpStatus.OK).

    }

}
