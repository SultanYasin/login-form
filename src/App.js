
import { Container, Grid  } from "@mui/material";
import "./App.css";

import Card from "./Components/MuiComponents/Card";

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={6} >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
