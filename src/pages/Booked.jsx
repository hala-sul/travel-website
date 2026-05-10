import { Link } from "react-router-dom";
import "./Booked.css";

const Bookings = ({ bookings, onCancel }) => {
  const total = bookings.reduce((sum, trip) => sum + trip.price, 0);

  const getIcon = (type) => {
    if (type === "air") return "✈️";
    if (type === "land") return "🚄";
    if (type === "sea") return "🌊";
    return "🌍";
  };

  return (
    <div className="bookings-page">
      <div className="bookings-container">
        {/* Header Section */}
        <div className="bookings-header">
          <div className="header-icon">📅</div>
          <h1>My Bookings</h1>
          <p className="booking-count">
            {bookings.length} {bookings.length === 1 ? 'Trip' : 'Trips'} Booked
          </p>
        </div>

        {bookings.length === 0 ? (
          // Empty State
          <div className="empty-state">
            <div className="empty-animation">
              <span className="empty-emoji">✈️</span>
              <span className="empty-emoji delay-1">🌍</span>
              <span className="empty-emoji delay-2">🌟</span>
            </div>
            <h2>No Bookings Yet</h2>
            <p>Start your adventure by booking your first trip!</p>
            <Link to="/trips" className="explore-trips-btn">
              Explore Trips →
            </Link>
          </div>
        ) : (
          <>
            {/* Bookings List */}
            <div className="bookings-list">
              {bookings.map((trip, index) => (
                <div 
                  key={trip.id} 
                  className="booking-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-icon">
                    {getIcon(trip.type)}
                  </div>
                  
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{trip.title}</h3>
                      <span className="trip-type-badge">
                        {trip.type}
                      </span>
                    </div>
                    
                    <div className="card-details">
                      <div className="detail">
                        <span className="detail-icon">💰</span>
                        <span>${trip.price}</span>
                      </div>
                      <div className="detail">
                        <span className="detail-icon">⏱️</span>
                        <span>{trip.duration} days</span>
                      </div>
                      <div className="detail">
                        <span className="detail-icon">🪑</span>
                        <span>{trip.seats} seats</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => onCancel(trip.id)} 
                    className="cancel-btn"
                  >
                    <span>✕</span> Cancel
                  </button>
                </div>
              ))}
            </div>

            {/* Total Section */}
            <div className="total-section">
              <div className="total-card">
                <div className="total-left">
                  <span className="total-icon">💰</span>
                  <div>
                    <div className="total-label">Total Spent</div>
                    <div className="total-sub">All bookings combined</div>
                  </div>
                </div>
                <div className="total-right">
                  <span className="total-amount">${total}</span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Back Button */}
        <Link to="/trips" className="back-to-trips">
          <span>←</span> Browse More Trips
        </Link>
      </div>
    </div>
  );
};

export default Bookings;