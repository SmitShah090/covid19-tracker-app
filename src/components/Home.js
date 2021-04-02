import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Home";
import Homeimg from "../assets/Symptoms/wash.svg"

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid justify="space-between" container spacing={7}>
          <Grid className={classes.title} item lg={12}>
            <Typography variant="h3" className={classes.heading}>
              Why is it important that <br></br>You Stay Home ?
            </Typography>
          </Grid>
          <Grid item lg={5}>
            <img className={classes.image} src={Homeimg} />
          </Grid>
          <Grid item lg={5}>
            <Grid className={classes.info} container spacing={3}>
              <Grid item lg={12}>
                <Typography variant="subtitle1">
                  <span>01.</span> Covid-19, Which is now a fast growing
                  pandemic. The number of confirmed cases worldwide has exceeded
                  2,50,60,000 due to rapid spreding of the virus.
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="subtitle1">
                  <span>02.</span> Covid-19, spreads very easily, much easier
                  than many other regular illness.we deal with on a regular
                  basis. That's what makes it so dangerous.
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="subtitle1">
                  <span>03.</span> The best course of action is to stay at home
                  prevent the spread of the disease as well as hospitals getting
                  overwhelmed with patients who simply should be there.
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="subtitle1">
                  <span>04.</span> In other words, you don’t even need to make
                  physical contact with another person to become infected with
                  COVID-19.
                </Typography>
              </Grid>
              <Grid item lg={12}>
                <Typography variant="subtitle1">
                  <span>05.</span> As of today, there is no know cure and no
                  approved vaccine for Covid-19
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
