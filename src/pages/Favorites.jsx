import { Link } from "react-router-dom";
import "./Favorites.css";

const Favorites = ({ favoriteTrips, onToggleFavorite, onBook }) => {

  const getIcon = (type) => {
    if (type === "air") return "✈️";
    if (type === "land") return "🚄";
    if (type === "sea") return "🌊";
    return "🌍";
  };

  return (
    <div className="favorites-page">
      <div className="favorites-container">
        {/* Header */}
        <div className="favorites-header">
          <div className="header-icon">❤️</div>
          <h1>My Favorite Trips</h1>
          <p className="favorites-count">
            {favoriteTrips.length} {favoriteTrips.length === 1 ? 'Trip' : 'Trips'} in Favorites
          </p>
        </div>

        {favoriteTrips.length === 0 ? (
          // Empty State
          <div className="empty-favorites">
            <div className="empty-animation">
              <span className="empty-heart">❤️</span>
              <span className="empty-heart delay-1">💕</span>
              <span className="empty-heart delay-2">💗</span>
            </div>
            <h2>No Favorites Yet</h2>
            <p>Click the heart icon on any trip to add it to your favorites!</p>
            <Link to="/trips" className="browse-fav-btn">
              Browse Trips →
            </Link>
          </div>
        ) : (
          <>
            {/* Favorites Grid */}
            <div className="favorites-grid">
              {favoriteTrips.map((trip, index) => (
                <div 
                  key={trip.id} 
                  className="favorite-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <button 
                    className="remove-fav-btn"
                    onClick={() => onToggleFavorite(trip.id)}
                  >
                    ❌
                  </button>
                  
                  <div className="card-image">
                    <div className="card-icon-large">
                      {getIcon(trip.type)}
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <h3>{trip.title}</h3>
                    <p>{trip.description.substring(0, 60)}...</p>
                    
                    <div className="card-stats">
                      <div className="stat">
                        <span>💰</span>
                        <span>${trip.price}</span>
                      </div>
                      <div className="stat">
                        <span>⏱️</span>
                        <span>{trip.duration}d</span>
                      </div>
                      <div className="stat">
                        <span>📍</span>
                        <span>{trip.type}</span>
                      </div>
                    </div>
                    
                    <div className="card-actions">
                      <button 
                        className="book-fav-btn"
                        onClick={() => onBook(trip.id)}
                      >
                        Book Now →
                      </button>
                      <Link to={`/trip/${trip.id}`} className="details-fav-btn">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="quick-action">
              <div className="action-card">
                <span className="action-icon">🎯</span>
                <div>
                  <h3>Ready to travel?</h3>
                  <p>Book your favorite trips before seats run out!</p>
                </div>
                <Link to="/trips" className="action-btn">
                  Explore More
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;