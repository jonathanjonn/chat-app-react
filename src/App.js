import "./style.scss";
import './App.css';
import { Register } from './pages/Register';
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currUser} = useContext(AuthContext)

  const RouteValidation = ({children}) => {
    if (!currUser) {
      return <Navigate to="/login" />
    }
    return children
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<RouteValidation><Home /></RouteValidation>} />
        <Route path="login" element={<Login />}/>
        <Route path="register" element={<Register />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
