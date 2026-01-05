import { useEffect, useState } from "react";
import { getDashboard } from "../api/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../App.css";

function Dashboard() {
  const [message, setMessage] = useState("Loading...");
  const [user, setUser] = useState({ username: "User" });
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }

    getDashboard()
      .then((res) => setMessage(res.data.message))
      .catch(() => {
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative", paddingLeft: "300px" }}>
      <Sidebar />

      {/* Top Bar with Username */}
      <div style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontWeight: "600", color: "white" }}>{user.username}</p>
            <div style={{ fontSize: "0.8rem", color: "#34d399", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.25rem" }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#34d399" }}></span>
              Online
            </div>
          </div>
          <div style={{ width: "45px", height: "45px", borderRadius: "50%", background: "linear-gradient(45deg, #6366f1, #ec4899)" }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: "0 2rem 2rem 0", maxWidth: "1280px" }}>

        {/* Welcome Section */}
        <div className="glass-panel animate-slide-up" style={{ padding: "3rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Wassup!!</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>
            {message}
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>

          <div className="glass-panel animate-slide-up" style={{ padding: "1.5rem", animationDelay: "0.1s" }}>
            <h3 style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>TOTAL SESSIONS</h3>
            <p style={{ fontSize: "2rem", fontWeight: "700" }}>24</p>
          </div>

          <div className="glass-panel animate-slide-up" style={{ padding: "1.5rem", animationDelay: "0.2s" }}>
            <h3 style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>ACCOUNT STATUS</h3>
            <div style={{ display: "inline-block", padding: "0.25rem 0.75rem", borderRadius: "20px", background: "rgba(16, 185, 129, 0.2)", color: "#34d399", fontSize: "0.85rem", fontWeight: "600" }}>
              Active
            </div>
          </div>

          <div className="glass-panel animate-slide-up" style={{ padding: "1.5rem", animationDelay: "0.3s" }}>
            <h3 style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>SECURITY LEVEL</h3>
            <p style={{ fontSize: "2rem", fontWeight: "700" }}>High</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;
