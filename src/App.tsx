import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home";
import CodePage from "./pages/code";
import InteractivePage from "./pages/interactive";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/code" element={<CodePage />} />
        <Route path="/interactive" element={<InteractivePage />} />
      </Route>
    </Routes>
  );
}

export default App;
