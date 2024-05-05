import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./index.css";

const CreateScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log("🐉 ~ onSubmit ~ data:", data);
    console.log("aqui es submit");
  });

  return (
    <div>
       <div style={{ marginTop: "10px" }}>
        <Header />
      </div>

      <div className="container-form">
        <form 
        onSubmit={onSubmit}
        className="form-create"
        >
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
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 20 caracteres.",
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
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 20 caracteres.",
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
                type="text"
                {...register("pice", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar un precio.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 20 caracteres.",
                  },
                })}
              />
              {errors.price && <p className="error">{errors.price.message}</p>}
            </div>

            <div className="input-fieldCreate">
              <label>Altura de resolución </label>
              <input
                type="text"
                {...register("resolution_height", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar una altura.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 20 caracteres.",
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
                type="text"
                {...register("resolution_width", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar un ancho.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Debe ingresar máaximo 20 caracteres.",
                  },
                })}
              />
              {errors.resolution_width && (
                <p className="error">{errors.resolution_width.message}</p>
              )}
            </div>

            <div className="input-fieldCreate">
              <label>Tipo</label>
              <input
                type="text"
                {...register("type", {
                  required: {
                    value: true,
                    message: "Campo requerido, debe ingresar un tipo.",
                  },
                  minLength: {
                    value: 4,
                    message: "Debe ingresar mínimo 4 caracteres.",
                  },
                  maxLength: {
                    value: 8,
                    message: "Debe ingresar máaximo 8 caracteres.",
                  },
                })}
              />
              {errors.type && <p className="error">{errors.type.message}</p>}
            </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '10px',
            width: '100%',
            paddingBottom: '30px',
            paddingTop: '30px',
          }}>
            <div style={{width: '50%'}}>
              <button 
              style={{
                background: "#000",
                width: '100%',
                borderRadius: '5px',
                border: "2px solid #554F95",
                padding: "8px 8px 8px 8px",
                fontWeight: "bold",
                color: "#fff",
              }}
              type="submit">
                Crear
              </button>
            </div>

            <div style={{width: '50%'}}>
            <button 
              style={{
                background: "#000",
                width: '100%',
                borderRadius: '5px',
                border: "2px solid #554F95",
                padding: "8px 8px 8px 8px",
                fontWeight: "bold",
                color: "#fff",
              }}
            
              >
                Volver
              </button>
            </div>
          </div>
          <br/><br />
        </form>
      </div>
    </div>
  );
};

export default CreateScreen;
