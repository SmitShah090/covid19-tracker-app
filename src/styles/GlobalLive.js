import { makeStyles } from "@material-ui/core";

import theme from "./style"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 80
    },
    image: {
        width: 285,
        height: 180
    },
    countryData: {
        backgroundColor: '#D7E2E9',
        Color: '#415A80'
    },
    totalData: {
        backgroundColor: '#D7E2E9',
        color: '#415A80'
    },
    text: {
        color: '#415A80'
    },
    heading: {
        color: '#415A80',
        fontSize: 40,
        fontFamily: 'Yatra One, cursive',
        marginBottom: 30,
        [theme.breakpoints.down("xs")]: {
            fontSize: 25
        }
    },
    card: {
        padding: 10
    }
}))

export default useStyles