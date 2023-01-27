package ingmar.org;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;

@QuarkusTest
public class PokemonResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("/api/pokemon")
          .then()
             .statusCode(200);
    }

}