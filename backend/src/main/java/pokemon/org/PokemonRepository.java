package pokemon.org;

import io.quarkus.hibernate.orm.panache.PanacheRepository;
import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class PokemonRepository implements PanacheRepository<PokemonEntity>{}
