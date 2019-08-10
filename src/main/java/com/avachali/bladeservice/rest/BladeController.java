package com.avachali.bladeservice.rest;

import com.avachali.bladeservice.model.Blade;
import com.avachali.bladeservice.repo.BladeRepository;
import com.avachali.bladeservice.service.BladeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@Slf4j
@CrossOrigin(origins = { "http://localhost:3000" })
public class BladeController {

    @Autowired
    BladeService bladeService;

    @GetMapping("/v1/blades")
    public List<Blade> getAllBlades() {
        log.debug("Controller..getallBlades");
        return bladeService.getAllBlades();

    }

    @DeleteMapping("/v1/blades/{id}")
    public ResponseEntity<Void> deleteBlade(@PathVariable  long id) {
        log.debug("Controller..deleteBlade");
        bladeService.deleteBlade(id);

        return ResponseEntity.noContent().build();// status(HttpStatus.OK).
    }

    @GetMapping("/v1/blades/{id}")
    public Blade getBlade(@PathVariable long id) {
        log.debug("In getBlade: "+id);

        return bladeService.getBlade(id);
    }

}
