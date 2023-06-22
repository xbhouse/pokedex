package pokemon.org;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import lombok.AllArgsConstructor;

@ApplicationScoped
@AllArgsConstructor
public class PokemonService {

  private final PokemonRepository pokemonRepository;
  private final PokemonMapper pokemonMapper;

  public List<Pokemon> findAll() {
    return pokemonMapper.toDomainList(pokemonRepository.findAll().list());
  }

  @Transactional
  public void create(Pokemon pokemon) {
    PokemonEntity entity = pokemonMapper.toEntity(pokemon);
    pokemonRepository.persist(entity);
    pokemonMapper.updateDomainFromEntity(entity, pokemon);
  } 

}
