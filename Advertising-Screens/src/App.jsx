import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Login from "./components/Login";
import Home from "./components/Home";
import CreateScreen from "./components/CreateScreen/CreateScreen";

function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/createScreen' element={<CreateScreen />} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
