import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CloudImg from "../Images/cloud_computing_architecture.png";

const styles = {
  card: {
    maxWidth: 1200,
    margin: "auto"
  },
  media: {
    minHeight: 800
  }
};

class home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <Typography variant="h6" className={classes.title}>
          Home Page
        </Typography>
        <CardMedia
          className={classes.media}
          image={CloudImg}
          title="Cloud Computing"
        />
        <CardContent>
          <Typography variant="body1" component="p">
            Welcome to the Cloudbaud Skeleton home page.
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(home);
