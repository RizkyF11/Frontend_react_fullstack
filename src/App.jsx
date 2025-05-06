import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import { useContext } from "react";
import { AppContext } from "./Context/AppContext";
import Create from "./pages/posts/Create";
import Show from "./pages/posts/Show";
import Update from "./pages/posts/Update";
import "./App.css";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/create" element={user ? <Create /> : <Login />} />

          <Route path="/posts/:id" element={<Show />} />

          <Route path="/posts/update/:id" element={user ? <Update /> : <Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
