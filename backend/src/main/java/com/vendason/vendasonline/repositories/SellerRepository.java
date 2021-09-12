package com.vendason.vendasonline.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vendason.vendasonline.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
