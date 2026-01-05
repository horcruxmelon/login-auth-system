import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed");
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
            <h1>Create Account</h1>
            <p>Start your journey with us today</p>
          </div>

          <form className="signup-form" onSubmit={handleSignup}>
            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="johndoe"
                value={username}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: "1rem" }}>
              {loading ? "Creating account..." : "Create Account"}
            </button>

            <p style={{ marginTop: "1.5rem", textAlign: "center", color: "var(--text-muted)" }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>

        {/* Right Side - Visual */}
        <div className="auth-right">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
            alt="Abstract Background"
            className="auth-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
