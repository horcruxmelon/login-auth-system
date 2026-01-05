import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    const menuItems = [
        { label: "Dashboard", path: "/dashboard", icon: "📊" },
        { label: "Settings", path: "/settings", icon: "⚙️" },
    ];

    return (
        <div className="glass-panel sidebar" style={{
            width: "250px",
            height: "calc(100vh - 4rem)",
            margin: "2rem",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            left: 0,
            top: 0
        }}>
            <div style={{ marginBottom: "3rem" }}>
                <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    background: "linear-gradient(to right, #6366f1, #ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                }}>
                    The Matrix
                </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                {menuItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            padding: "1rem",
                            borderRadius: "12px",
                            textDecoration: "none",
                            color: location.pathname === item.path ? "white" : "var(--text-muted)",
                            background: location.pathname === item.path ? "rgba(99, 102, 241, 0.2)" : "transparent",
                            transition: "all 0.3s ease",
                            border: location.pathname === item.path ? "1px solid rgba(99, 102, 241, 0.3)" : "1px solid transparent"
                        }}
                    >
                        <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                        <span style={{ fontWeight: "500" }}>{item.label}</span>
                    </Link>
                ))}
            </div>

            <button
                onClick={handleLogout}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    borderRadius: "12px",
                    color: "#ef4444",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "auto",
                    transition: "all 0.3s ease"
                }}
            >
                <span>🚪</span>
                <span style={{ fontWeight: "500" }}>Logout</span>
            </button>
        </div>
    );
}

export default Sidebar;
