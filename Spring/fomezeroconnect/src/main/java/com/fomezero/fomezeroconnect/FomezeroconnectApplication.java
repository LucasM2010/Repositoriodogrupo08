package com.fomezero.fomezeroconnect;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FomezeroconnectApplication {
@GetMapping("/")
	public String oi(){
		return "oi";
	}
	public static void main(String[] args) {
		SpringApplication.run(FomezeroconnectApplication.class, args);
	}

}
