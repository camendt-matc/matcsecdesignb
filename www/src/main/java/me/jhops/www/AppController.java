package me.jhops.www;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AppController {

	@GetMapping("/")
	public String index() {
		return "index";
	}

	@GetMapping("/skills")
	public String skills() {
		return "skills";
	}

}