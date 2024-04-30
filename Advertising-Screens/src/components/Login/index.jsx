import React from "react";
import "./index.css";

const Login = () => {
  return (
    <div className="container">

      <div className="card">
        <form>
          <div className="form">
            <div style={{ alignItems: 'center', textAlign: 'center', marginBottom: '20px'}}>
              <h1>Sign In</h1>
              <span>
                Dont have an account?{" "}
                <span className="underlinedText">Sign Up</span>
              </span>
            </div>
            <div className="input-box">
              <input />
              <label>Correo</label>
              <input />
              <label>Correo</label>
            </div>
            <div style={{ alignItems: 'center', textAlign: 'center', marginBottom: '20px'}} >
              <span className="underlinedText">Forgot your password?</span>
            </div>
            <div style={{ alignItems: 'center', textAlign: 'center'}}>
              <button className="button" type="submit">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
