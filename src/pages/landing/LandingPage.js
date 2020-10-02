import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import chatImage from "../../assets/undraw_work_chat_erdt.svg";

const Header = () => {
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
              <Button
                variant="contained"
                size="large"
                disableElevation
                color="primary"
              >
                Try It
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};

const MainContent = () => {
    return (
        <Grid container className="landing-page-content">
            <Grid item xs={12} sm={5} m={6}>
                <Typography variant="h1">A new way to chat</Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
                <img src={chatImage} height="550" alt="work chat" />
            </Grid>
        </Grid>
    )
}

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
