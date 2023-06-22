package pokemon.org;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
@Mapper(componentModel = "cdi")
public interface PokemonMapper {

    List<Pokemon> toDomainList(List<PokemonEntity> list);

    Pokemon toDomain(PokemonEntity entity);

    @InheritInverseConfiguration(name = "toDomain")
    PokemonEntity toEntity(Pokemon domain);

    void updateEntityFromDomain(Pokemon domain, @MappingTarget PokemonEntity entity);

    void updateDomainFromEntity(PokemonEntity entity, @MappingTarget Pokemon domain);

}
