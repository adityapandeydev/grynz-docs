import Download from "./pages/Download";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Docs from "./pages/Docs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/download" element={<Download />} />
      <Route path="/docs" element={<Docs />} />
      {/* ... other routes */}
    </Routes>
  );
}
