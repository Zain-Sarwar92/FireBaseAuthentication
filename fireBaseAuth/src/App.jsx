import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthPage from "./pages/AuthPage";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={
            <AuthPage>
              <Profile />
            </AuthPage>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
