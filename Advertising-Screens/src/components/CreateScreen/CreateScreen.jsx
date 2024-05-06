import React from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./index.css";
import { postScreen } from "../../services/postScreen";

const CreateScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoBack = () => {
    navigate("/home");
  };

  const onSubmit = handleSubmit((data) => {
    const token = window.localStorage.getItem("@token");
    const body = {
      name: data.name,
      description: data.description,
      price_per_day: data.price_per_day,
      resolution_height: data.resolution_height,
      resolution_width: data.resolution_width,
      type: data.type,
    };

    postScreen(body, token)
      .then((res) => {
        navigate("/home");
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  });

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        <Header />
      </div>

      <div className="container-form">
        <form onSubmit={onSubmit} className="form-create">
          <div className="input-fieldCreate">
            <label>Nombre</label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un nombre.",
                },
                minLength: {
                  value: 10,
                  message: "Debe ingresar mínimo 10 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message: "Debe ingresar máximo 50 caracteres.",
                },
              })}
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>

          <div className="input-fieldCreate">
            <label>Descripción</label>
            <input
              type="text"
              {...register("description", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar una descripción.",
                },
                minLength: {
                  value: 20,
                  message: "Debe ingresar mínimo 4 caracteres.",
                },
              })}
            />
            {errors.description && (
              <p className="error">{errors.description.message}</p>
            )}
          </div>

          <div className="input-fieldCreate">
            <label>Precio</label>
            <input
              type="number"
              {...register("price_per_day", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un precio.",
                },
              })}
            />
            {errors.price && <p className="error">{errors.price.message}</p>}
          </div>

          <div className="input-fieldCreate">
            <label>Altura de resolución </label>
            <input
              type="number"
              {...register("resolution_height", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar una altura.",
                },
              })}
            />
            {errors.resolution_height && (
              <p className="error">{errors.resolution_height.message}</p>
            )}
          </div>

          <div className="input-fieldCreate">
            <label>Ancho de resolución</label>
            <input
              type="number"
              {...register("resolution_width", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un ancho.",
                },
              })}
            />
            {errors.resolution_width && (
              <p className="error">{errors.resolution_width.message}</p>
            )}
          </div>

          <div className="input-fieldCreate">
            <label> Selecciona un Tipo</label>
            <select
              {...register("type", {
                required: {
                  value: true,
                  message: "Campo requerido, debe ingresar un tipo.",
                },
              })}
            >
              <option value="">Seleccionar</option>
              <option value="indoor">Interior</option>
              <option value="outdoor">Exterior</option>
            </select>
            {errors.type && <p className="error">{errors.type.message}</p>}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              paddingBottom: "30px",
              paddingTop: "30px",
            }}
          >
            <div style={{ width: "100%" }}>
              <button
                style={{
                  background: "#000",
                  width: "100%",
                  borderRadius: "5px",
                  border: "2px solid #554F95",
                  padding: "8px 8px 8px 8px",
                  fontWeight: "bold",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={handleGoBack}
              >
                Volver
              </button>
            </div>
            <div style={{ width: "100%" }}>
              <button
                style={{
                  background: "#000",
                  width: "100%",
                  borderRadius: "5px",
                  border: "2px solid #554F95",
                  padding: "8px 8px 8px 8px",
                  fontWeight: "bold",
                  color: "#fff",
                  cursor: "pointer",
                }}
                type="submit"
              >
                Crear
              </button>
            </div>
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
};

export default CreateScreen;
