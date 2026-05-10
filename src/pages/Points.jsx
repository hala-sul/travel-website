import { Link } from "react-router-dom";
import "./Points.css";

const Points = ({ points, freeTrips, bookings }) => {
  
  const calculateProgress = () => {
    const progress = (points % 3) / 3 * 100;
    return progress;
  };

  const pointsToNext = 3 - (points % 3);
  const totalSpent = bookings.reduce((sum, trip) => sum + trip.price, 0);
  const tripsWithPoints = bookings.length;

  return (
    <div className="points-page">
      <div className="points-container">
        {/* Header */}
        <div className="points-header">
          <div className="header-icon">⭐</div>
          <h1>Points & Rewards</h1>
          <p>Earn points with every booking and get free trips!</p>
        </div>

        {/* Main Points Card */}
        <div className="points-main-card">
          <div className="points-display">
            <div className="points-circle">
              <span className="points-big">{points}</span>
              <span className="points-label">Total Points</span>
            </div>
            <div className="free-trips-display">
              <span className="free-big">{freeTrips}</span>
              <span className="free-label">Free Trips Available</span>
            </div>
          </div>
          
          <div className="progress-section">
            <div className="progress-info">
              <span>Progress to next free trip</span>
              <span>{pointsToNext} points needed</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${calculateProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="how-it-works">
          <h2>📖 How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📅</div>
              <h3>Book a Trip</h3>
              <p>Every trip you book earns you 1 point</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">⭐</div>
              <h3>Collect Points</h3>
              <p>Collect points with every booking</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">🎁</div>
              <h3>Get Free Trips</h3>
              <p>Every 3 points = 1 FREE trip!</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid-2">
            <div className="stat-card-mini">
              <span className="stat-mini-icon">💰</span>
              <div>
                <div className="stat-mini-label">Total Spent</div>
                <div className="stat-mini-value">${totalSpent}</div>
              </div>
            </div>
            <div className="stat-card-mini">
              <span className="stat-mini-icon">✈️</span>
              <div>
                <div className="stat-mini-label">Trips Booked</div>
                <div className="stat-mini-value">{tripsWithPoints}</div>
              </div>
            </div>
            <div className="stat-card-mini">
              <span className="stat-mini-icon">⭐</span>
              <div>
                <div className="stat-mini-label">Points Earned</div>
                <div className="stat-mini-value">{points}</div>
              </div>
            </div>
            <div className="stat-card-mini">
              <span className="stat-mini-icon">🎁</span>
              <div>
                <div className="stat-mini-label">Free Trips</div>
                <div className="stat-mini-value">{freeTrips}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {freeTrips > 0 ? (
          <div className="cta-section active">
            <div className="cta-content">
              <span className="cta-icon">🎉</span>
              <div>
                <h3>You have {freeTrips} free trip(s) available!</h3>
                <p>Go book your next adventure for FREE!</p>
              </div>
              <Link to="/trips" className="cta-btn">
                Book Now →
              </Link>
            </div>
          </div>
        ) : (
          <div className="cta-section">
            <div className="cta-content">
              <span className="cta-icon">⭐</span>
              <div>
                <h3>{pointsToNext} more points to get a FREE trip!</h3>
                <p>Book another trip to earn points</p>
              </div>
              <Link to="/trips" className="cta-btn">
                Browse Trips →
              </Link>
            </div>
          </div>
        )}

        {/* Recent Bookings */}
        {bookings.length > 0 && (
          <div className="recent-bookings">
            <h3>📋 Recent Bookings</h3>
            <div className="recent-list">
              {bookings.slice(-5).reverse().map((booking, i) => (
                <div key={i} className="recent-item">
                  <span className="recent-icon">
                    {booking.isFree ? '🎁' : '📅'}
                  </span>
                  <span className="recent-name">{booking.title}</span>
                  <span className="recent-price">
                    {booking.isFree ? 'FREE!' : `$${booking.price}`}
                  </span>
                  <span className="recent-points">
                    {booking.isFree ? '🎉' : '+1 ⭐'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Points;