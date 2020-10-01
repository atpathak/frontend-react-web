import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

// MUI Stuff
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { display } from "@material-ui/system";

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

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phoneNumber: "",
      password: "",
      name: "",
      loading: false,
      errors: {}
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const newuserData = {
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      password: this.state.password,
      name: this.state.name
    };
    axios
      .post("/backend/registerUsingEmail", newuserData)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("FBIdToken", "Bearer $(res.data.token)");
        this.setState({
          loading: false
        });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          //errors: err.response.data,
          loading: false
        });
      });
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
          <Typography variant="h3" className={classes.pageTitle}>
            SIGN UP
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
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
            <TextField
              variant="outlined"
              margin="normal"
              id="phoneNumber"
              name="phoneNumber"
              type="phoneNumber"
              label="Phone"
              className={classes.textField}
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
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
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              SIGN UP
            </Button>
            <br />
            <small>
              Already have an account ? sign in <Link to="/signin">here</Link>
            </small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(signup);
