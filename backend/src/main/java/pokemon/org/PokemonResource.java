package pokemon.org;

import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.Set;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/api/pokemon")
public class PokemonResource {

    @GET
    public Set<Pokemon> getPokemon() {

        Set <Pokemon> pokemonList = Collections.newSetFromMap(Collections.synchronizedMap(new LinkedHashMap<>()));

        Pokemon pokemon = new Pokemon();
        pokemon.setName("Pikachu");
        pokemonList.add(pokemon);

        Pokemon pokemon2 = new Pokemon();
        pokemon2.setName("Charmander");
        pokemonList.add(pokemon2);
        return pokemonList;
    }
}