import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Login from "./components/Login";

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
