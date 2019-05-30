package com.example.myapp.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity //This means that this class maps to a table in a database
public class Hello {
	//@ sign means annotation
    @Id //id is a primary key
    @GeneratedValue(strategy=GenerationType.IDENTITY) //Means that the value is generated by the database
    private int id;
    private String message;
    public int getId() {    
    	return id;          
    }
    
    public void setId(int id) {
    	this.id = id;  
    }
    
    public String getMessage() {
    	return message;
    }
    
    public void setMessage(String msg) {
    	this.message = msg; 
    }
}
