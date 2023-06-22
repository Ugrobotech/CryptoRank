import "./App.css";
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found/Not-found";
import Dashboard from "./components/dashboard/Dashboard";
import Dynamicdash from "./components/dashboard/dynamicDashboard/Dynamicdash";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dynamicdash />} />
        <Route path="/dash" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
