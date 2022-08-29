import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignUp from "./components/Register";
import SignIn from "./components/Login";
import Home from "./components/Home"
import { useEffect } from "react";
import { getUser } from "./state/user";
import { useDispatch } from "react-redux";
import Profile from "./components/Profile";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/profile/:id" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
