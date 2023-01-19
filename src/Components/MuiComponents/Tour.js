import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from "@mui/material";
import React from "react";
import SideImage from "./SideImage";
import Accordions from "./Accordians";
import BasicModal from "./BasicModal";

export default function Tour() {
  const [value, setValue] = React.useState(0);
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Immerse into the Falls
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          height={325}
          alt=""
        />
        <SideImage />
      </Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography variant="paragraph" component="p" marginY={3}>
          Las Vegas often known
          simply as Vegas, is the 25th-most populous city in the United States,
          the most populous city in the state of Nevada, and the county seat of
          Clark County. The city anchors the Las Vegas Valley metropolitan area
          and is the largest city within the greater Mojave Desert.[6] Las Vegas
          is an internationally renowned major resort city, known primarily for
          its gambling, shopping, fine dining, entertainment, and nightlife. The
          Las Vegas Valley as a whole serves as the leading financial,
          commercial, and cultural center for Nevada. The city bills itself as
          The Entertainment Capital of the World, and is famous for its
          luxurious and extremely large casino-hotels together with their
          associated activities. It is a top three destination in the United
          States for business conventions and a global leader in the hospitality
          industry, claiming more AAA Five Diamond hotels than any other city in
          the world.[7][8][9] Today, Las Vegas annually ranks as one of the
          world's most visited tourist destinations.[10][11] The city's
          tolerance for numerous forms of adult entertainment earned it the
          title of "Sin City",[12] and has made Las Vegas a popular setting for
          literature, films, television programs, and music videos.
        </Typography>
      </Box>
      <Typography variant="h6" component="h4" marginBottom={3}>
        Frequently Asked Questions
      </Typography>
      <Accordions />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
