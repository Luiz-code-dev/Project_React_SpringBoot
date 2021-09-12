package com.vendason.vendasonline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vendason.vendasonline.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
