import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ balance = 5000, points = 0, freeTrips = 0, user, onLogout }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/trips", label: "Trips", icon: "✈️" },
    { path: "/favorites", label: "Favorites", icon: "❤️" },
    { path: "/booked", label: "Booked", icon: "📅" },
    { path: "/points", label: "Points", icon: "⭐" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo">✈️ Voyago</div>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-item ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </div>
      
      <div className="nav-right">
        <div className="balance-badge">
          <span className="balance-icon">💰</span>
          <span className="balance-value">${balance}</span>
        </div>
        
        <div className="points-badge">
          <span className="points-icon">⭐</span>
          <span className="points-value">{points}</span>
        </div>
        
        {freeTrips > 0 && (
          <div className="free-trips-badge">
            <span className="free-icon">🎁</span>
            <span className="free-value">{freeTrips}</span>
          </div>
        )}
        
        {user ? (
          <div className="user-menu">
            <span className="user-name">👤 {user.name}</span>
            <button onClick={onLogout} className="logout-btn">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;