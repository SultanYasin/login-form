import { Paper, Grid, Typography, Box, Rating, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";


const Card = ( { tour } ) => {
  const [value, setValue] = React.useState(4);

  /*
  1- import createTheme and themeProvide from react then create a new const thats gonna have all the specific styles I want 
  2- define the components and specify the mui element I want to style like -> Mui then followed by the element I want to style
  3- specify what props I will write inside of the element (like ID) to apply the style.
  */
  
  const theme = createTheme({
    components: {
      // if I provide variant of "body2" in the typography, then I want you to make the font size 11. ELSE if  Í provide "body3" then I want you to make the fontSize 9
      MuiTypography:{ variants: [
         { props: { variant:"body2" }, style: { fontSize:15 } },
         { props: { variant:"body3" }, style: { fontsize:11 } },

      ] }
    }
  })

  return (

    <Grid item xs={3} sx={{mt:"50px", }} >
      <ThemeProvider theme={theme} >
      <Paper
        elevation={8}
         sx={{borderRadius:"3%" }} 
      >
        <img src={tour.image} alt="biceps" className="CardIMG" />
        <Box paddingX={2}>
          <Typography component="h1" variant="subtitle1"> {tour.name} </Typography>

          <Box 
            sx={{ display: "flex", alignItems: "center" }}>
              <AccessTimeFilledIcon sx={{ width: 19 }} />
            <Typography variant="body2" component="p" marginLeft={0.5} > {tour.duration} hours </Typography>
          </Box>

          <Box sx={{mt:"20px"}} display="flex"  >
            <Rating
             name="simple-controlled"
             value={tour.rating}
             onChange={(event, newValue) => {setValue(newValue); }}
             precision={0.5}
             size="small"
             />
             <Typography variant="body1" component="p" marginLeft={0.5} > {tour.rating} </Typography>
             <Typography variant="body1" component="p" marginLeft={1} > ( {tour.numberOfReviews} views ) </Typography>
          </Box>

          <Box>
            <Typography  variant="h6" component='h3' >Price from $ {tour.price}  </Typography>
          </Box>
        </Box>
      </Paper>
      </ThemeProvider>
    </Grid>
  
  );
};

export default Card;
