import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="glass-panel auth-container">
        {/* Left Side - Form */}
        <div className="auth-left">
          <div className="auth-header">
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form-actions">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>

            <p style={{ marginTop: "1.5rem", textAlign: "center", color: "var(--text-muted)" }}>
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </div>

        {/* Right Side - Visual */}
        <div className="auth-right">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
            alt="Abstract Design"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
