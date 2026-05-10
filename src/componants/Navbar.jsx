
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = ({
  balance = 5000,
  points = 0,
  freeTrips = 0,
  user,
  onLogout
}) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/trips", label: "Trips", icon: "✈️" },
    { path: "/favorites", label: "Favorites", icon: "❤️" },
    { path: "/booked", label: "Booked", icon: "📅" },
    { path: "/points", label: "Points", icon: "⭐" },
  ];

  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <div className="logo">✈️ Voyago</div>

        {/* Desktop Menu */}
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

      {/* RIGHT */}
      <div className="nav-right">
        <div className="balance-badge">
          💰 {balance}
        </div>

        <div className="points-badge">
          ⭐ {points}
        </div>

        {freeTrips > 0 && (
          <div className="free-trips-badge">
            🎁 {freeTrips}
          </div>
        )}

        {user ? (
          <div className="user-menu">
            <span className="user-name">👤 {user.name}</span>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-btn">
            Login
          </Link>
        )}

        {/* ☰ Mobile Button */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="mobile-item"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon} {item.label}
            </Link>
          ))}

          {user ? (
            <button
              onClick={() => {
                setMenuOpen(false);
                onLogout();
              }}
              className="mobile-logout"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="mobile-login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;