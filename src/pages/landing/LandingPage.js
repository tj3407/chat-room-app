import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import chatImage from "../../assets/undraw_work_chat_erdt.svg";
import history from "../../history";

const Header = () => {
  const handleClick = () => {
    // window.location.replace("/chat");
    history.push("/chat");
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="inherit"
      className="landing-page-navbar"
    >
      <Grid container justify="space-between" alignItems="center">
        <Grid item>
          <Typography display="inline" variant="h5">
            <strong>MADCHATTER</strong>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify="flex-end" spacing={2}>
            <Grid item>
              <Button size="large">Sign In</Button>
            </Grid>
            <Grid item>
              <Link to="/chat">
                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    color="primary"
                    onClick={handleClick}
                >
                    Try It Now
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const MainContent = () => {
  const handleClick = () => {
    // window.location.replace("/chat");
    history.push("/chat");
  };

  return (
    <Grid container className="landing-page-content">
      <Grid item xs={12} sm={5} m={6}>
        <Typography variant="h1">A new way to chat</Typography>
        <Typography variant="h4">Collaborate with colleagues, friends, and others without missing a beat!</Typography>
        <Link to="/chat">
            <Button
            size="large"
            onClick={handleClick}
            variant="contained"
            disableElevation
            color="primary"
            >
            Try It Now
            </Button>
        </Link>
      </Grid>
      <Grid item xs={12} sm={7}>
        <img src={chatImage} height="550" alt="work chat" />
      </Grid>
    </Grid>
  );
};

const LandingPage = (props) => {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
