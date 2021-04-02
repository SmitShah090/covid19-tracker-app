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
import useStyles from "../styles/GlobalLive";
import Axios from "axios";

const TotalCard = ({ title, cases, todayCases, lastUpdated }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3}>
      <Paper className={classes.totalData}>
        <Typography className={classes.text} variant="h6">
          {title}
        </Typography>
        <Typography className={classes.text} variant="subtitle1">
          {cases}
        </Typography>
        <Typography className={classes.text} variant="subtitle2">
          +{todayCases}
        </Typography>
        <Typography className={classes.text} variant="caption">
          Last Update : {lastUpdated}
        </Typography>
      </Paper>
    </Grid>
  );
};

const GlobalLive = () => {
  const classes = useStyles();

  const [latest, setLatest] = useState([]);
  const [countries, setCountries] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountries = countries.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });

  useEffect(() => {
    Axios.all([
      Axios.get("https://corona.lmao.ninja/v2/all"),
      Axios.get("https://corona.lmao.ninja/v2/countries"),
    ])

      .then((responseArr) => {
        setLatest(responseArr[0].data);
        setCountries(responseArr[1].data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  const results = filterCountries.map((data, i) => {
    return (
      <Grid key={i} item lg={3} md={6} xl={12}>
        <Paper className={classes.countryData}>
          <Typography>
            <img className={classes.image} src={data.countryInfo.flag} />
          </Typography>
          <Typography className={classes.text} variant="h5">
            {data.country}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Cases: {data.cases}{" "}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Deaths: {data.deaths}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Recovered: {data.recovered}
          </Typography>
          <Typography className={classes.text} variant="subtitle1">
            Active: {data.active}{" "}
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
          <Grid item lg={12} xs={12}>
            <Typography className={classes.heading} variant="h4">
              Covid-19 Live Updates of the World
            </Typography>
          </Grid>

          {/*  Total Cases  */}

          <Grid item lg={12} xs={12}>
            <Container>
              <Grid container spacing={3} className={classes.card}>
                <TotalCard
                  title={"Cases"}
                  cases={latest.cases}
                  todayCases={latest.todayCases}
                  lastUpdated={lastUpdated}
                />
                <TotalCard
                  title={"Deaths"}
                  cases={latest.deaths}
                  todayCases={latest.todayDeaths}
                  lastUpdated={lastUpdated}
                />
                <TotalCard
                  title={"Recovered"}
                  cases={latest.recovered}
                  todayCases={latest.todayRecovered}
                  lastUpdated={lastUpdated}
                />
                <TotalCard
                  title={"Active"}
                  cases={latest.active}
                  todayCases={latest.todayActive}
                  lastUpdated={lastUpdated}
                />
              </Grid>
            </Container>
          </Grid>

          {/* SearchBar */}
          <Grid item lg={12}>
            <FormControl justify="center">
              <InputLabel justify="center" htmlFor="my-input">
                Search Country
              </InputLabel>
              <Input
                fullWidth
                onChange={(e) => setSearchCountries(e.target.value)}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>

          {/*  All Country */}
          <Grid item lg={12} xl={12}>
            <Grid container spacing={4} justify="center">
              {results}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GlobalLive;
