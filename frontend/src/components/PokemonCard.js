import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PokemonCard = (props) => {

  return (
    <React.Fragment>
      {Object.keys(props.pokemon).map((p, i) => 
        <div key={i}>
          <Card className="pokemon-card" variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                {props.pokemon[p].name}
              </Typography>
              <Typography variant="h7" component="div">
                Level: {props.pokemon[p].level}
              </Typography>
              <Typography variant="h7" component="div">
                Type: {props.pokemon[p].pokemonType}
              </Typography>
            </CardContent>
          </Card>
        </div>)}
      </React.Fragment>
  )
}

export default PokemonCard;