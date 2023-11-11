package pro.simplereflex.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import pro.simplereflex.server.models.User;
import pro.simplereflex.server.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    public boolean registerUser(User user) {
        if(userRepository.findByUsername(user.getUsername()).isPresent()) return false;

        //Encode Password
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        //Save User to DB
        userRepository.save(user);

        return true;
    }
}
