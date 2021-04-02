import {
  CircularProgress,
  Container,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "../styles/IndiaLive";
import Axios from "axios";

const TotalCard = ({ title, cases, lastUpdated }) => {
  const classes = useStyles();
  return (
    <Grid item lg={4}>
      <Paper className={classes.totalData}>
        <Typography className={classes.text} variant="h6">{title}</Typography>
        <Typography className={classes.text} variant="subtitle1">{cases}</Typography>
        <Typography className={classes.text} variant="caption">Last Update : {lastUpdated}</Typography>
      </Paper>
    </Grid>
  );
};

const IndialLive = () => {
  const classes = useStyles();

  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchStates, setSearchStates] = useState("");

  const [loading, setLoading] = useState(false)

  const filterStates = results.filter((item) => {
    return searchStates !== ""
      ? item.state.toLowerCase().includes(searchStates.toLowerCase())
      : item;
  });

  useEffect(() => {

    setLoading(true)
    Axios.all([
      Axios.get("https://corona.blloc.com/current?country=India"),
      Axios.get("https://api.covid19india.org/data.json"),
    ])

      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data.statewise);
      })

      .catch((err) => {
        console.log(err);
      });

      setLoading(false)
  }, []);

  const states = filterStates.map((result, i) => {
    return (
      <Grid item lg={3} xl={12}>
        <Paper className={classes.stateData}>
          <Typography className={classes.text} variant="h6">{result.state}</Typography>

          <Typography className={classes.text} variant="subtitle1">
            Active cases:{result.active}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Confirmed cases:{result.confirmed}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Recovered cases:{result.recovered}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">Deaths:{result.deaths}</Typography>
          <Typography className={classes.text} variant="caption">
            Last updated {result.lastupdatedtime}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <div className={classes.root}>
      
      <Container>
        <Grid container spacing={3} justify="center">


          {/* Heading */}
          <Grid item lg={12}>
            <Typography className={classes.heading} variant="h4">
              Covid-19 Live Updates of the India
            </Typography>
          </Grid>


          {/* SearchBar */}
          <Grid item lg={12}>
            <FormControl>
              <InputLabel htmlFor="my-input">Search States</InputLabel>
              <Input
                onChange={(e) => setSearchStates(e.target.value)}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>


          {/*  All Country */}
          <Grid item lg={12} xl={12}>
            <Container>
              <Grid container spacing={8} justify="center">
              {loading && <CircularProgress />}
                {states}
              </Grid>
            </Container>
          </Grid>


        </Grid>
      </Container>
    </div>
  );
};

export default IndialLive;
