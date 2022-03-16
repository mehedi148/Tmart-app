import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper fixed__footer">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
