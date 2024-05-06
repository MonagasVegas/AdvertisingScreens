import React from "react";
import "./index.css";
import { useForm } from "react-hook-form";
import city from "../../assets/images/pu.png";
import { postLogin } from "../../services/postLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    postLogin(body)
      .then((res) => {
        const response = res.data;
        window.localStorage.setItem("@token", response.token);
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  });

  return (
    <div className="container-login">
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
              <h1>Iniciar sesión</h1>
              <span>
                ¿No tienes una cuenta?{" "}
                <span className="underlinedText">Registrarse</span>
              </span>
            </div>

            <div className="input-field">
              <label>Correo</label>
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
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <br />
            <div className="input-field">
              <label>Contraseña</label>
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
              <span className="underlinedText">¿Olvidaste tu contraseña?</span>
            </div>
            <div
              style={{
                alignItems: "center",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <button className="button" type="submit">
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
