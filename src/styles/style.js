import {createMuiTheme, responsiveFontSizes} from '@material-ui/core'

let theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F2F4F8',
            dark: '#D7E2E9',
        },
        secondary: {
            main: '#a5d4dc',
            dark: '#415A80'
        },
    }
})

theme = responsiveFontSizes(theme)

export default theme