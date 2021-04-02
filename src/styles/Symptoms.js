import { makeStyles } from "@material-ui/core";
import theme from '../styles/style'

const useStyles = makeStyles(theme => ({
    root: { 
        marginTop: 60
    },
    image: {
        width:300,
        height: 300,
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "100%"
          },
    },
    caption: {
        color: "#415A80",
    },
    cotainer: {
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            height: "120%"
          }
    },
    heading: {
        color: '#415A80',
        fontSize: 40,
        fontFamily: 'Yatra One, cursive',
        marginBottom: 30,
        [theme.breakpoints.down("xs")]: {
            fontSize: 30
        }
    },
}))

export default useStyles