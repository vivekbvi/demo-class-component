import React, { Fragment, Component } from "react";
import "./Registration.css";
import { withRouter } from "react-router-dom";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredFname: "",
      enteredLname: "",
      enteredEmail: "",
      enteredPassword: "",
      enteredSetPassword: "",
      enteredDate: "",
      enteredFnameTouched: false,
      enteredLnameTouched: false,
      enteredEmailTouched: false,
      enteredPasswordTouched: false,
      enteredSetPasswordTouched: false,
      enteredDateTouched: false,
    };
  }

  render() {
    console.log("props", this.props);
    // input validations

    // Name Validation
    const enteredFNameIsValid = this.state.enteredFname.trim() !== "";
    const enteredFnameIsInvalid =
      !enteredFNameIsValid && this.state.enteredFnameTouched;

    const enteredLnameIsValid = this.state.enteredLname.trim() !== "";
    const enteredLnameIsInvalid =
      !enteredLnameIsValid && this.state.enteredLnameTouched;

    // Email Validation
    const enteredEmailIsValid =
      this.state.enteredEmail.trim().length > 4 &&
      this.state.enteredEmail.includes("@");

    const enteredEmailIsInvalid =
      !enteredEmailIsValid && this.state.enteredEmailTouched;

    // Password Validation
    const enteredPasswordIsValid = this.state.enteredPassword.trim() !== "";
    const enteredPasswordIsInvalid =
      !enteredPasswordIsValid && this.state.enteredPasswordTouched;

    // SetPassword Validation
    const enteredSetPasswordIsValid =
      this.state.enteredPassword === this.state.enteredSetPassword;
    const enteredSetPasswordIsInvalid =
      !enteredSetPasswordIsValid && this.state.enteredSetPasswordTouched;

    // Date Validation
    const enteredDateIsValid = this.state.enteredDate.trim() !== "";
    const enteredDateIsInvalid =
      !enteredDateIsValid && this.state.enteredDateTouched;

    // fname change handler
    const fnameInputChangeHandler = (event) => {
      this.setState({ enteredFname: event.target.value });
    };
    const fnameInputBlurChangeHandler = (event) => {
      this.setState({ enteredFnameTouched: true });
    };

    // LnameChange Handler
    const lnameInputChangeHandler = (event) => {
      this.setState({ enteredLname: event.target.value });
    };
    const lnameInputBlurChangeHandler = (event) => {
      this.setState({ enteredLnameTouched: true });
    };

    // Mail Change Handler
    const emailInputChangeHandler = (event) => {
      this.setState({ enteredEmail: event.target.value });
    };

    const emailInputBlurChangeHandler = (event) => {
      this.setState({ enteredEmailTouched: true });
    };

    // Password Change Handler
    const passwordInputChangeHandler = (event) => {
      this.setState({ enteredPassword: event.target.value });
    };

    const passwordInputBlurChangeHandler = (event) => {
      this.setState({ enteredPasswordTouched: true });
    };

    // set Password Change Handler
    const setPasswordInputChangeHandler = (event) => {
      this.setState({ enteredSetPassword: event.target.value });
    };

    const setPasswordInputBlurChangeHandler = (event) => {
      this.setState({ enteredSetPasswordTouched: true });
    };

    //Date Change Handler
    const dateInputChangeHandler = (event) => {
      this.setState({ enteredDate: event.target.value });
    };
    const dateInputBlurChangeHandler = () => {
      this.setState({ enteredDateTouched: true });
    };

    // Form Validation
    let formIsValid = false;

    if (
      enteredFNameIsValid &&
      enteredLnameIsValid &&
      enteredEmailIsValid &&
      enteredPasswordIsValid &&
      enteredDateIsValid &&
      enteredSetPasswordIsValid
    ) {
      formIsValid = true;
    }

    // Form Handler
    const formSubmissionHandler = (event) => {
      event.preventDefault();
      this.setState({ enteredFnameTouched: true });

      if (!enteredFNameIsValid) {
        return;
      }

      this.setState({
        enteredLnameTouched: false,
        enteredFnameTouched: false,
        enteredEmailTouched: false,
        enteredFname: "",
        enteredLname: "",
        enteredEmail: "",
      });
    };

    // dynamic Classes
    const inputFnameClasses = enteredFnameIsInvalid
      ? " form-control invalid"
      : "form-control";

    const inputLnameClasses = enteredLnameIsInvalid
      ? " form-control invalid"
      : "form-control";

    const inputEmailClasses = enteredEmailIsInvalid
      ? " form-control invalid"
      : "form-control";

    const inputPasswordClasses = enteredPasswordIsInvalid
      ? " form-control invalid"
      : "form-control";

    const inputSetPasswordClasses = enteredSetPasswordIsInvalid
      ? "form-control invalid"
      : "form-control";

    const inputDateClasses = enteredDateIsInvalid
      ? " form-control invalid"
      : "form-control";

    return (
      <Fragment>
        <form onSubmit={formSubmissionHandler} className="form-div">
          <div className="control-group">
            <h3>Sign Up Here : </h3>
            <br />
            <div className={inputFnameClasses}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                value={this.state.enteredFname}
                onChange={fnameInputChangeHandler}
                onBlur={fnameInputBlurChangeHandler}
                placeholder="Enter First Name"
              />
              {enteredFnameIsInvalid && (
                <p className="error-text">First Name Must be filled.</p>
              )}
            </div>
          </div>
          <div className="control-group">
            <div className={inputLnameClasses}>
              <label htmlFor="Lname">Last Name</label>
              <input
                type="text"
                id="Lname"
                placeholder="Enter Last Name"
                value={this.state.enteredLname}
                onChange={lnameInputChangeHandler}
                onBlur={lnameInputBlurChangeHandler}
              />
              {enteredLnameIsInvalid && (
                <p className="error-text">Last Name Must be filled.</p>
              )}
            </div>
          </div>

          <div className="control-group">
            <div className={inputEmailClasses}>
              <label htmlFor="Email">Mail Address</label>
              <input
                type="text"
                id="Email"
                placeholder="Enter Email"
                value={this.state.enteredEmail}
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurChangeHandler}
              />
              {enteredEmailIsInvalid && (
                <p className="error-text">Please Enter Valid Mail.</p>
              )}
            </div>
          </div>

          {/* Date Input  */}

          <div className="control-group">
            <div className={inputDateClasses}>
              <label htmlFor="Date">Date of birth</label>
              <input
                type="date"
                id="Date"
                placeholder="Select Date"
                value={this.state.enteredDate}
                onChange={dateInputChangeHandler}
                onBlur={dateInputBlurChangeHandler}
              />
              {enteredDateIsInvalid && (
                <p className="error-text">Please Select Date.</p>
              )}
            </div>
          </div>

          {/* Password Inputs */}
          <div className="control-group">
            <div className={inputPasswordClasses}>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                id="Password"
                placeholder="Enter Password"
                value={this.state.enteredPassword}
                onChange={passwordInputChangeHandler}
                onBlur={passwordInputBlurChangeHandler}
              />
              {enteredPasswordIsInvalid && (
                <p className="error-text">Please Enter Valid Password.</p>
              )}
            </div>
          </div>

          <div className="control-group">
            <div className={inputSetPasswordClasses}>
              <label htmlFor="SetPassword">Confirm Password</label>
              <input
                type="password"
                id="SetPassword"
                placeholder="Confirm Password"
                value={this.state.enteredSetPassword}
                onChange={setPasswordInputChangeHandler}
                onBlur={setPasswordInputBlurChangeHandler}
              />

              {enteredSetPasswordIsInvalid && (
                <p className="error-text">Please Enter Same Password.</p>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button
              className="rounded"
              disabled={!formIsValid}
              onClick={() =>
                this.props.history.push({
                  pathname: "/HomePage",
                  data: this.state.enteredFname,
                })
              }
            >
              {/* <Link
                to="/HomePage"
                style={{ color: "white", textDecoration: "none" }}
              > */}
              Submit
              {/* </Link> */}
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default withRouter(Registration);
