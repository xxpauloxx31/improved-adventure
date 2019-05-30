package com.example.myapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.myapp.models.Hello;
//Repository to use the data of the database. Via a service you can retrieve the data
public interface HelloRepository 
	extends CrudRepository<Hello, Integer>{
	
}
