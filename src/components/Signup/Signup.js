import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-form">
      <div className="signup-left">
        <img src="/Pics/girl.png" alt="" />
      </div>
      <div className="signup-right">
        <form>
          <div className="logo">
            <img src="/Pics/Vector.png" alt="" />
            <h2>Leaf</h2>
          </div>
          <div className="img-hide">
            <img src="/Pics/at.png" alt="" />
          </div>
          <h2>Create Account</h2>
          <div className="input-boxes">
            <div className="first-box">
              <label>Full Name</label>
              <span>
                <img src="/Pics/user.png" alt="" />
                <input type="text" placeholder="Enter Full Name" />
              </span>
            </div>
            <div className="first-box">
              <label>Eamil</label>
              <span>
                <img src="/Pics/mail-02.png" alt="" />
                <input type="text" placeholder="Enter Your Mail" />
              </span>
            </div>
            <div className="first-box">
              <label>Password</label>
              <span>
                <img src="/Pics/lock.png" alt="" />
                <input type="text" placeholder="Enter Your Password" />
              </span>
            </div>
          </div>
          <button>Sign-Up</button>
        </form>
        <div className="or-image">
          <img src="/Pics/or.png" alt="" />
        </div>
        <div className="social-links">
          <span>
            <img src="/Pics/google.png" alt="" />
          </span>
          <span>
            <img src="/Pics/fb.png" alt="" />
          </span>
          <span>
            <img src="/Pics/apple.png" alt="" />
          </span>
        </div>
        <div className="login-link">
          <p>
            Already have an account?<span>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
