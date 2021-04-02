import { makeStyles } from "@material-ui/core";
import theme from "./style";

const useStyles = makeStyles(theme=>({
    root: {
        marginTop: 30
    },
    title: {
        color: '#415A80',
        
    },
    heading: {
        fontFamily: 'Yatra One, cursive',
        [theme.breakpoints.down("xs")]: {
            fontSize: 30,
            marginTop: 30,
            marginBottom: 20
          },
    },
    info: {
        textAlign: "justify",
        marginTop: 20,
        color: '#415A80',
        [theme.breakpoints.down("xs")]: {
            marginTop: -20
        },
    },
    image: {
        height: "80%",
        [theme.breakpoints.down("xs")]: {
            width: "115%",
        },
    }
}))

export default useStyles