package com.avachali.bladeservice.repo;

import com.avachali.bladeservice.model.Blade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInit implements ApplicationRunner {

    private BladeRepository bladeRepository ;

    @Autowired
    public DataInit(BladeRepository bladeRepository) {
        this.bladeRepository = bladeRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        long count = bladeRepository.count();
        //create some records if none exist
        if (count == 0) {
            Blade blade = new Blade();
            blade.setName("Feather");
            blade.setStars(4);
            blade.setNotes("Good");
            bladeRepository.save(blade);

            blade = new Blade();
            blade.setName("Wilkinson");
            blade.setStars(3);
            blade.setNotes("Ok");
            bladeRepository.save(blade);

            blade = new Blade();
            blade.setName("Silver");
            blade.setStars(2);
            blade.setNotes("Bleh");
            bladeRepository.save(blade);

        }


    }
}
