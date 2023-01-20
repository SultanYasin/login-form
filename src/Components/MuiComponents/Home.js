import React from "react";

import { BottomNavigation, Container, Grid, Typography } from "@mui/material";
import Card from "./Card";
import "../../App.css"; 
import cities from "../../Data.json";

const Home = () => {
  return (
    <div>
      
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography variant="h4" marginTop={5} marginBottom={3}>
              Top {city.name} Tours
            </Typography>
            <Grid container spacing={3}>
              {city.tours.map((tour, index) => (
                <Card tour={tour} key={index} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
      <BottomNavigation  >2023</BottomNavigation>
    </div>
  );
};

export default Home;
