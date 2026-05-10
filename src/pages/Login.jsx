import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // مستخدمين تجريبيين
  const demoUsers = [
    { email: "admin@voyago.com", password: "admin123", name: "Admin User", role: "admin" },
    { email: "user@voyago.com", password: "user123", name: "Demo User", role: "user" },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    if (!isLogin) {
      if (!formData.name) {
        newErrors.name = "Name is required";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // محاكاة طلب سيرفر
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (isLogin) {
      const user = demoUsers.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        localStorage.setItem("user", JSON.stringify({
          email: user.email,
          name: user.name,
          role: user.role,
          isLoggedIn: true
        }));
        if (onLogin) onLogin(user);
        navigate("/");
      } else {
        setErrors({ general: "Invalid email or password" });
      }
    } else {
      const userExists = demoUsers.some(u => u.email === formData.email);
      if (userExists) {
        setErrors({ general: "Email already exists. Please login." });
      } else {
        const newUser = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          role: "user"
        };
        demoUsers.push(newUser);
        
        localStorage.setItem("user", JSON.stringify({
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
          isLoggedIn: true
        }));
        
        alert(`🎉 Welcome to Voyago, ${newUser.name}!`);
        if (onLogin) onLogin(newUser);
        navigate("/");
      }
    }
    
    setIsLoading(false);
  };

  const handleDemoLogin = () => {
    setFormData({
      email: "user@voyago.com",
      password: "user123",
      name: "",
      confirmPassword: ""
    });
  };

  const handleAdminDemo = () => {
    setFormData({
      email: "admin@voyago.com",
      password: "admin123",
      name: "",
      confirmPassword: ""
    });
  };

  return (
    <div className="login-page">
      {/* Background with Particles */}
      <div className="login-bg">
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
            }}></div>
          ))}
        </div>
        <div className="bg-gradient"></div>
      </div>

      {/* Login Card */}
      <div className="login-card">
        <div className="card-inner">
          {/* Logo Section */}
          <div className="logo-section">
            <div className="logo-animation">
              <span className="logo-plane">✈️</span>
              <span className="logo-star">⭐</span>
              <span className="logo-heart">❤️</span>
            </div>
            <h1 className="logo-text">Voyago</h1>
            <p className="tagline">{isLogin ? "Welcome back!" : "Start your journey"}</p>
          </div>

          {/* Demo Buttons */}
          <div className="demo-section">
            <p className="demo-label">Try Demo Account</p>
            <div className="demo-buttons">
              <button type="button" onClick={handleDemoLogin} className="demo-btn user">
                <span>👤</span> Demo User
              </button>
              <button type="button" onClick={handleAdminDemo} className="demo-btn admin">
                <span>👑</span> Demo Admin
              </button>
            </div>
          </div>

          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon">👤</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? "error-input" : ""}
                  />
                </div>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            )}

            <div className="form-group">
              <div className="input-group">
                <span className="input-icon">📧</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-input" : ""}
                />
              </div>
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <div className="input-group">
                <span className="input-icon">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error-input" : ""}
                />
                <button 
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && <span className="error-message">{errors.password}</span>}
            </div>

            {!isLogin && (
              <div className="form-group">
                <div className="input-group">
                  <span className="input-icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={errors.confirmPassword ? "error-input" : ""}
                  />
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>
            )}

            {errors.general && <div className="error-general">{errors.general}</div>}

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="spinner"></span>
                  {isLogin ? "Signing In..." : "Creating Account..."}
                </>
              ) : (
                <>
                  {isLogin ? "Sign In" : "Create Account"}
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>
          </form>

          <div className="switch-section">
            <button 
              type="button"
              className="switch-btn"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setFormData({
                  email: "",
                  password: "",
                  name: "",
                  confirmPassword: ""
                });
              }}
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
              <span className="switch-icon">{isLogin ? "→" : "←"}</span>
            </button>
          </div>

          {/* Footer */}
          <div className="login-footer">
            <p>By continuing, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;