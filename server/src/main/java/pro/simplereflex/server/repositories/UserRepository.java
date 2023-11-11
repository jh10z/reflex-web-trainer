package pro.simplereflex.server.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import pro.simplereflex.server.models.User;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    Optional<User> findByUsername(String username);

}
