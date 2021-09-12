package com.vendason.vendasonline.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.vendason.vendasonline.dto.SellerDTO;
import com.vendason.vendasonline.service.SellerService;

@Controller
@RequestMapping(value = "/sellers")
public class SellerController {

	@Autowired
	private SellerService service;


	@GetMapping
	public ResponseEntity<List<SellerDTO>> findAll() {
		List<SellerDTO> list = service.findAll();
		return ResponseEntity.ok(list);
	}


}
