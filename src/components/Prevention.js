import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../styles/Prevention";
import WearMask from "../assets/Preventions/wearing mask.jpg";
import Clean from "../assets/Preventions/clean.jpg";
import Face from "../assets/Preventions/don't.jpg";
import Eyes from "../assets/Preventions/eyes.jpg";
import HandWash from "../assets/Preventions/handwash.jpg";

const CardPrevention = ({ image, title, caption }) => {
  const classes = useStyles();

  return (
    <Grid item lg={4}>
      <Container>
        <Paper >
          <Grid container spacing={2} >
            <Grid item lg={12}>
              <img className={classes.image} src={image} />
            </Grid>
            <Grid item lg={12}>
              <Typography variant="subtitle1" className={classes.caption}>
                {title}
              </Typography>
              <Typography variant="caption" className={classes.caption}>
                {caption}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Grid>
  );
};

const Prevention = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={6} justify="space-evenly">
        <Grid item lg={12}>
            <Typography className={classes.heading} variant="h4">
              Precautions
            </Typography>
          </Grid>
          <CardPrevention
            image={HandWash}
            title={"Wash your hands Frequently"}
            caption={
              "Clean your hands often. Use soap and water, or and alcohol-based hand rub."
            }
          />

          <CardPrevention
            image={Clean}
            title={"Clean and Disinfect"}
            caption={
              "Use alcohol-based disinfectants to clean hard surfaces in your home."
            }
          />
          <CardPrevention
            image={Eyes}
            title={"Avoid Contect with Sick People"}
            caption={
              "Maintain a Safe distance from anyone who is coughing or sneezing."
            }
          />
          <CardPrevention
            image={Face}
            title={"Do't Touch face"}
            caption={"Do't Touch,Eyes and Mouth with unwashed hands."}
          />
          <CardPrevention
            image={WearMask}
            title={"Wear a Mask"}
            caption={"Wear a Mask when physical distancing is not possible."}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default Prevention;
