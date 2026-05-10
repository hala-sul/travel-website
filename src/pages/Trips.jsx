import { useState } from "react";
import { Link } from "react-router-dom";
import "./Trips.css";

const Trips = ({ tripsData, onBook, favorites, onToggleFavorite, freeTrips = 0 }) => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredTrips = tripsData.filter((t) => {
    const matchSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchType = typeFilter === "all" || t.type === typeFilter;
    return matchSearch && matchType;
  });

  const getIcon = (type) => {
    if (type === "air") return "✈️";
    if (type === "land") return "🚄";
    if (type === "sea") return "🌊";
    return "🌍";
  };

  const handleBookClick = (tripId, isFree = false) => {
    onBook(tripId, isFree);
  };

  return (
    <div className="trips-container">
      <h1>✈️ All Trips</h1>

      {/* Search and Filter */}
      <div className="search-filter">
        <input
          type="text"
          placeholder="🔍 Search trips..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
          <option value="all">All Types</option>
          <option value="air">✈️ Air</option>
          <option value="sea">🌊 Sea</option>
          <option value="land">🚄 Land</option>
        </select>
      </div>

      {/* Trips Grid */}
      <div className="trips-grid">
        {filteredTrips.map((trip) => {
          const isFavorite = favorites?.includes(trip.id) || false;
          
          return (
            <div key={trip.id} className="trip-card">
              {/* Favorite Button */}
              <button 
                className={`favorite-btn ${isFavorite ? 'active' : ''}`}
                onClick={() => onToggleFavorite(trip.id)}
              >
                {isFavorite ? '❤️' : '♡'}
              </button>

              {/* Trip Icon */}
              <div className="trip-icon">
                <span style={{ fontSize: "50px" }}>{getIcon(trip.type)}</span>
              </div>

              {/* Trip Content */}
              <div className="trip-content">
                <h3>{trip.title}</h3>
                <p>{trip.description.substring(0, 80)}...</p>
                <p><strong>Type:</strong> {trip.type}</p>
                <p><strong>💰 Price:</strong> ${trip.price}</p>
                <p><strong>⏱️ Duration:</strong> {trip.duration} days</p>
                <p><strong>🪑 Seats:</strong> {trip.seats}</p>
              </div>

              {/* Buttons */}
              <div className="trip-buttons">
                <button 
                  className="book-btn" 
                  onClick={() => handleBookClick(trip.id, false)}
                >
                  💰 Book Now - ${trip.price}
                </button>
                
                {freeTrips > 0 && (
                  <button 
                    className="free-book-btn-card" 
                    onClick={() => handleBookClick(trip.id, true)}
                  >
                    🎁 Use FREE Trip! ({freeTrips})
                  </button>
                )}
                
                <Link to={`/trip/${trip.id}`}>
                  <button className="details-btn">🔍 View Details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredTrips.length === 0 && (
        <div className="no-results">
          <p>No trips found matching your search 😢</p>
        </div>
      )}
    </div>
  );
};

export default Trips;