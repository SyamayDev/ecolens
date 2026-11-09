import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {!isHomePage && <Navbar />}
      <Outlet />
    </main>
  );
}

export default App;
