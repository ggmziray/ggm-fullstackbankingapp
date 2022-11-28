import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Home from "./pages/Home";
import Withdraw from "./pages/Withdraw";
import Deposit from "./pages/Deposit";
import { ContextProvider } from "./Context/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
