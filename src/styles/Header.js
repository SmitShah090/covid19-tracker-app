import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  logo: {
    marginLeft: -20,
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    },
    [theme.breakpoints.down("md")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  },
  button: {
      flexGrow: 1,
      color: '#415A80',
      fontSize: 15
  }
}));

export default useStyles