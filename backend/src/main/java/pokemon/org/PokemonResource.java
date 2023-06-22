package pokemon.org;

import java.net.URI;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import lombok.AllArgsConstructor;

import org.eclipse.microprofile.openapi.annotations.enums.SchemaType;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

@Path("/api/pokemon")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@AllArgsConstructor
public class PokemonResource {

        private final PokemonService pokemonService;

        @GET 
        @APIResponse(
            responseCode ="200",
            description = "Get all pokemon",
            content = @Content(
                mediaType = MediaType.APPLICATION_JSON,
                schema = @Schema(type = SchemaType.ARRAY, implementation = Pokemon.class)
            )
        )
        public Response get() {
            return Response.ok(pokemonService.findAll()).build();
        }

        @POST
        @APIResponse(
            responseCode = "201",
            description = "Pokemon created",
            content = @Content(
                mediaType = MediaType.APPLICATION_JSON,
                schema = @Schema(type = SchemaType.OBJECT, implementation = Pokemon.class)
            )
        )
        @APIResponse(
            responseCode = "400",
            description = "Invalid pokemon",
            content = @Content(mediaType = MediaType.APPLICATION_JSON)
        )
        public Response post(Pokemon pokemon, @Context UriInfo uriInfo) {
            pokemonService.create(pokemon);
            URI uri = uriInfo.getAbsolutePathBuilder()
                .path(Integer.toString(pokemon.getId()))
                .build();
            return Response.created(uri).entity(pokemon).build();
        }



    
}