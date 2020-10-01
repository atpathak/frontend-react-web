import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    textAlign: "center"
  },
  pageTitle: {
    margin: "20px auto 20px auto"
  },
  textField: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20
  }
};

class contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      errors: {}
    };
  }
  handleSubmit = event => {
    console.log("hi");
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <Typography variant="h3" gutterBottom className={classes.pageTitle}>
            Contact Us
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <div className={classes.row}>
              <TextField
                variant="outlined"
                margin="normal"
                id="name"
                name="name"
                type="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange}
                fullWidth
              />
              <TextField
                variant="outlined"
                margin="normal"
                id="email"
                name="email"
                type="email"
                label="Email"
                className={classes.textField}
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth
              />
            </div>
            <br />
            <TextField
              multiline
              rows="4"
              variant="outlined"
              margin="normal"
              id="message"
              name="message"
              type="message"
              label="Message"
              className={classes.textField}
              value={this.state.message}
              onChange={this.handleChange}
              fullWidth
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

contact.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(contact);
