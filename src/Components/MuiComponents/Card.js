import { Paper, Grid, Typography, Box, Rating, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import biceps from "../assets/biceps.jpg";

const Card = () => {
  const [value, setValue] = React.useState(4);

  return (
    <Grid item xs={3}>
      <ThemeProvider>
      <Paper
        elevation="10"
        /* sx={{marginTop: "10px", display: "flex", 
           alignItems: "center", justifyContent: "center" }} */
      >
        <img src={biceps} alt="biceps" className="CardIMG" />
        <Box paddingX={2}>
          <Typography component="h1" variant="subtitle1"> hi </Typography>

          <Box 
            sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeFilledIcon sx={{ width: 19 }} />
            <Typography variant="body2" component="p" marginLeft={0.5} > 5 hours </Typography>
          </Box>

          <Box sx={{mt:"20px"}} display="flex"  >
            <Rating
             name="simple-controlled"
             value={value}
             onChange={(event, newValue) => {setValue(newValue); }}
             precision={0.5}
             size="small"
             />
             <Typography variant="body2" component="p" marginLeft={0.5} > 4.5 </Typography>
             <Typography variant="body2" component="p" marginLeft={0.5} > ( 655 views ) </Typography>
          </Box>

          <Box>
            <Typography  variant="h6" >20 times </Typography>
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default Card;
