package pokemon.org;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity(name = "Pokemon")
@Table(name = "pokemon")
@Data
public class PokemonEntity {

  @Id @GeneratedValue private Integer id;

  private String name;

  private String pokemonType;

  private Integer level;

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getId() {
    return id;
  }

  public void setName(String name)
  {
    this.name = name;
  }

  public String getName()
  {
    return this.name;
  }

  public void setType(String pokemonType)
  {
    this.pokemonType = pokemonType;
  }

  public String getType()
  {
    return this.pokemonType;
  }

  public void setLevel(Integer level)
  {
    this.level = level;
  }

  public Integer getLevel()
  {
    return this.level;
  }
}
