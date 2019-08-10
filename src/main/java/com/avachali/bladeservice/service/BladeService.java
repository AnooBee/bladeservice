package com.avachali.bladeservice.service;

import com.avachali.bladeservice.model.Blade;
import com.avachali.bladeservice.repo.BladeRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Slf4j
public class BladeService {

    @Autowired
    BladeRepository bladeRepository;

    public List<Blade> getAllBlades() {

        log.debug("in getAllBlades");
        return (List<Blade>) bladeRepository.findAll();
    }

    public void deleteBlade(long id) {

        log.debug("in DeleteBlades with id: "+id);
        if(bladeRepository.existsById(id)) {
            bladeRepository.deleteById(id);
        } else {
            throw new NoSuchElementException("Blade with id :"+ id+ " not found");
        }
    }

    public Blade getBlade(long id) {
        log.debug("in getBlade: "+id);
        Optional<Blade> blade = bladeRepository.findById(id);
        if (blade.isPresent()) {
            return blade.get();
        } else {
            throw new NoSuchElementException("Blade with id :"+ id+ " not found");

        }
        //return Optional.ofNullable(blade).orElseThrow(NoSuchElementException::new);

    }
}
