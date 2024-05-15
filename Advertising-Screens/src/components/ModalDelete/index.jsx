import { deleteScreen } from "../../services/deleteScreen";
import { getScreens } from "../../services/getScreens";
import { colors } from "../../styles/Colors";

// eslint-disable-next-line react/prop-types
const ModalDelete = ({ setOpenDelete, setFilterScreen, screenId, setOpen }) => {
  const token = window.localStorage.getItem("@token");
  const pageSize = 8;
  const offset = 1;

  const handleGoBack = () => {
    setOpenDelete(false);
  };

  const handleDetele = () => {
    deleteScreen(screenId, token)
      .then(() => {
        getScreens(pageSize, offset, token).then(({ data: { data: data } }) => {
          setFilterScreen(data);
          setOpenDelete(false);
          setOpen(false);
        });
      })
      .catch((error) => {
        console.log("🐉 ~ .then ~ error:", error);
      });
  };

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>¿Deseas eliminar esta pantalla?</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "50px",
        }}
      >
        <span>Al eliminar es posible que no se pueda recuperar después.</span>
      </div>
      <div>
        <br />
        <br />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          paddingTop: "10px",
          paddingBottom: "8px",
        }}
      >
        <div style={{ width: "40%" }}>
          <button
            style={{
              width: "100%",
              borderRadius: "5px",
              background: colors.Grey500,
              border: "2px solid #9E9E9E",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#000",
              cursor: "pointer",
            }}
            onClick={handleDetele}
          >
            Eliminar
          </button>
        </div>

        <div style={{ width: "40%" }}>
          <button
            style={{
              background: colors.Grey500,
              width: "100%",
              borderRadius: "5px",
              border: "2px solid #9E9E9E",
              padding: "8px 8px 8px 8px",
              fontWeight: "bold",
              color: "#000",
              cursor: "pointer",
            }}
            onClick={handleGoBack}
          >
            Volver
          </button>
        </div>
      </div>
      <div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ModalDelete;
