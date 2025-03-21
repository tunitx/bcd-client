import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../components/Signin"
import Signup from "../components/Signup";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element = {<Signin/>} />
        <Route path="/signup" element = {<Signup/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;
