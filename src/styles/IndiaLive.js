import { makeStyles } from "@material-ui/core";

import theme from "./style"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 80
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
    stateData:{
        [theme.breakpoints.down("xs")]: {
            width: 280,
            
        paddingTop: 20,
        paddingBottom: 20
        },
        width: 280,
        height: 180,
        paddingBottom: 20,
        paddingTop: 10,
        backgroundColor: '#D7E2E9',
        Color: '#415A80',
    }
}))

export default useStyles