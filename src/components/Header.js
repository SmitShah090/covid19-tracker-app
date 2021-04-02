import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import Logo from "../assets/Covid-logo.jfif"
import useStyles from "../styles/Header"



const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Symptoms",
      pageURL: "/symptoms"
    },
    {
      menuTitle: "Prevention",
      pageURL: "/prevention"
    },
    {
      menuTitle: "GlobalLive",
      pageURL: "/globalLive"
    },
    {
      menuTitle: "IndiaLive",
      pageURL: "/indiaLive"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="static">
        <Toolbar>
        {/* <Typography className={classes.logo}><img src={Logo} /></Typography> */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/")}
              >
                Home
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/symptoms")}
              >
                Symptoms
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/prevention")}
              >
                Prevention
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/globalLive")}
              >
                GlobalLive
              </Button>
              <Button
                className={classes.button}
                color="inherit"
                onClick={() => handleButtonClick("/indiaLive")}
              >
                IndiaLive
              </Button>
              <div className={classes.auth}>
              
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);






