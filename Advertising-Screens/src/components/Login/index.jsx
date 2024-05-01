import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import city from "../../assets/images/pu.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("ERROR", errors);

  const onSubmit = handleSubmit((data) => {
    console.log("data", data);
    console.log("ESTO ES EL MENSAJE DE EL BOTON. ");
  });

  return (
    <div className="container">
        <div className="card">
          <form onSubmit={onSubmit}>
            <div className="form">
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                <h1>Sign In</h1>
                <span>
                  Dont have an account?{" "}
                  <span className="underlinedText">Sign Up</span>
                </span>
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message:
                        "Campo requerido, debe ingresar un correo electrónico",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Correo no válido",
                    },
                  })}
                />
                {errors.email && (
                  <p className="error">{errors.email.message}</p>
                )}
              </div>
              <br />
              <div className="input-field">
                <label>Password</label>
                <input
                  type="text"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Campo requerido, debe ingresar una contraseña",
                    },
                  })}
                />
                {errors.password && (
                  <p className="error">{errors.password.message}</p>
                )}
              </div>

              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <span className="underlinedText">Forgot your password?</span>
              </div>
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
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
