import "@src/App.css";
import Navigation from "@src/components/Navigation";
import Home from "@src/pages/Home";
import Landing from "@src/pages/Landing";
import Login from "@src/pages/Login";
import Notfound from "@src/pages/Notfound";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
