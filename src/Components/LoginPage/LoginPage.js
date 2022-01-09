import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import insta_image from "../../Components/../images/9364675fb26a.svg";
import insta_logo from "../../Components/../images/logoinsta.png";
import fb from "../../Components/../images/fb.png";
import playstore from '../../Components/../images/play.png'
import appstore from '../../Components/../images/app.png'
import "./LoginPage.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : true
    }
  }

  changeLogin = () => {
    this.setState({isLogin : !this.state.isLogin})
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            hihi
          </Grid>
          <Grid item xs={6}>
            <div className="loginpage_main">
              <div>
                <img alt="insta_image" src={insta_image} width="454px" />
              </div>
              <div>
                <div className="loginpage_rightcomponent">
                  <img
                    className="loginpage_logo"
                    src={insta_logo}
                    alt="insta_logo"
                  ></img>
                  <div className="loginpage_sigin">
                    {
                      this.state.isLogin ? <SignIn/> : <SignUp/>
                    }

                    <div className="loginpage__ordiv">
                      <div className="loginpage__divider"></div>
                      <div className="loginpage__or">OR</div>
                      <div className="loginpage__divider"></div>
                    </div>

                    <div className="loginpage__fb">
                        <img alt="fb" src={fb} width="15px" style={{marginRight : "5px"}} />Log in with Facebook
                    </div>
                    <div className="loginpage__forgot">Forgot password?</div>
                  </div>
                </div>

                <div className="loginpage__signupoption">
                  {
                    this.state.isLogin ? 
                    <div className="loginpage__signup">
                      Don't have an account? <span onClick={this.changeLogin} style={{cursor:"pointer",fontWeight:"bold" , color:"#0395F6"}}>Sign up</span>
                    </div> :
                    <div className="loginpage__signin">
                        Have an account? <span onClick={this.changeLogin} style={{cursor:"pointer",fontWeight:"bold" , color:"#0395F6"}}>Sign in</span>
                    </div>
                  }
                </div>

                <div className="loginpage__downloadSection">
                    <div>Get the app.</div>
                    <div className="loginpage__option">
                        <img className="loginpage__dwimg" alt="appstore" src={appstore} width="136px"/>
                        <img className="loginpage__dwimg" alt="playstore" src={playstore} width="136px"/>
                    </div>
                </div>

              </div>
            </div>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
