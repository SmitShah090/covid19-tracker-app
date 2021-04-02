import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 60,
  },
  image: {
    width: 200,
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%"
    },
  },
  caption: {
    color: "#415A80",
    margin: 10
  },
  heading: {
    color: '#415A80',
    fontSize: 40,
    fontFamily: 'Yatra One, cursive',
    marginBottom: 30,
    [theme.breakpoints.down("xs")]: {
        fontSize: 30
    },
},
}));

export default useStyles;
