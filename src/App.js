import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Components/Page1";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
// import Footer from "./Components/Footer";

import SignIn from "./Components/SignIn";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
