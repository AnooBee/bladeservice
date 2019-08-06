package com.avachali.bladeservice.service;

import com.avachali.bladeservice.repo.BladeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BladeService {

    @Autowired
    BladeRepository bladeRepository;

}
