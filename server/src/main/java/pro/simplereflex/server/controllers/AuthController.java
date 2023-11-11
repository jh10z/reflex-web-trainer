package pro.simplereflex.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pro.simplereflex.server.models.User;
import pro.simplereflex.server.repositories.UserRepository;
import pro.simplereflex.server.services.UserService;

@RestController
@RequestMapping("/public/auth")
public class AuthController {

    @Autowired
    UserService userService;

    @PostMapping(path = "/register", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
    public String register(@RequestBody User user) {
        if(userService.registerUser(user)) {

            return "New User Registered!";
        }
        return "User Already Exists...";
    }

    @PostMapping(value = "/login")
    public String login(@ModelAttribute User user) {

        return "TODO";
    }
}
