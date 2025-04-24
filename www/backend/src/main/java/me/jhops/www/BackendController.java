package me.jhops.www;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BackendController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from from the backend server!";
    }
    
}