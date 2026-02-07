import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { auth } from "./store/auth";

export default function App() {
  const [isAuth, setIsAuth] = useState<boolean>(
    !!auth.getToken()
  );

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleLogout = () => {
    auth.logout();
    setIsAuth(false);
  };

  if (!isAuth) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onLogout={handleLogout} />
      <Dashboard />
    </div>
  );
}
