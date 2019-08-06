package com.avachali.bladeservice.repo;

import com.avachali.bladeservice.model.Blade;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface BladeRepository extends CrudRepository<Blade, Long> {


}
