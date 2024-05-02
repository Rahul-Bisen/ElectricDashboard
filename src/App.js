import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Component/Display";
import LoginPage from "./Component/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testdata from "./Component/Testdata";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="login/:uname" element={<Display />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="test" element={<Testdata />} />
          <Route path="display" element={<Display />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
