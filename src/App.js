import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoComponent from "./components/VideoComponent";
import HomeComponent from "./components/HomeComponent";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/video/:id" element={<VideoComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
