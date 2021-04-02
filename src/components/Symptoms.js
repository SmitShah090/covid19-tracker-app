import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Symptoms";
import dryCough from "../assets/Symptoms/dry cough.jpg";
import Fever from "../assets/Symptoms/fever.jpg";
import ShortBreathe from "../assets/Symptoms/Short Breathe.jpg";
import appetite from "../assets/Symptoms/Loss of appetite.png";
import Fatigue from "../assets/Symptoms/Fatigue.jpg";
import RunnyNose from "../assets/Symptoms/Runny Nose.jpg";
import Headache from "../assets/Symptoms/Headache.jpg";
import Smell from "../assets/Symptoms/Smell.jpg";
import Fainting from "../assets/Symptoms/Fainting.jpg";
import Confusion from "../assets/Symptoms/Confused.jpg";
import Diarrhea from "../assets/Symptoms/Diarrhea.jpg";
import BodyAches from "../assets/Symptoms/Body Aches.jpg";

const CardSymptoms = ({ image, title }) => {
  const classes = useStyles();

  return (
    <Grid item lg={4} xl={12}>
      <Container>
        <Grid container spacing={2}>
          <Paper>
            <Grid item lg={12} xl={12} className={classes.container}>
              <img className={classes.image} src={image} />
              <Typography className={classes.caption} variant="h6">
                {title}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Container>
    </Grid>
  );
};

const Prevention = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={7} justify="space-evenly">
          <Grid item lg={12}>
            <Typography className={classes.heading} variant="h4">
              Sysmptoms
            </Typography>
          </Grid>
          <CardSymptoms image={Fever} title={"Fever"} />
          <CardSymptoms image={ShortBreathe} title={"Short Breathe"} />
          <CardSymptoms image={dryCough} title={"Dry Cough"} />
          <CardSymptoms image={appetite} title={"Lose of appetite"} />
          <CardSymptoms image={Fatigue} title={"Fatigue"} />
          <CardSymptoms image={RunnyNose} title={"Runny Nose"} />
          <CardSymptoms image={Headache} title={"Headache"} />
          <CardSymptoms image={Smell} title={"Loss of Smell"} />
          <CardSymptoms image={Fainting} title={"Fainting"} />
          <CardSymptoms image={Confusion} title={"Sudden Confusion"} />
          <CardSymptoms image={Diarrhea} title={"Diarrhea"} />
          <CardSymptoms image={BodyAches} title={"Body Aches"} />
        </Grid>
      </Container>
    </div>
  );
};

export default Prevention;
