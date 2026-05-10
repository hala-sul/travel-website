import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./TripDetails.css";

const TripDetails = ({ tripsData, onBook, freeTrips = 0 }) => {
  const { id } = useParams();
  const trip = tripsData.find((t) => t.id === parseInt(id));

  // ✅ حالة التعليقات - تحميل من localStorage مخصوص لكل رحلة
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(`comments_${id}`);
    if (savedComments) {
      return JSON.parse(savedComments);
    }
    return trip?.comments || [];
  });
  
  const [newComment, setNewComment] = useState("");
  const [isBooking, setIsBooking] = useState(false);
  const [isFreeBooking, setIsFreeBooking] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ حفظ التعليقات في localStorage
  useEffect(() => {
    localStorage.setItem(`comments_${id}`, JSON.stringify(comments));
  }, [comments, id]);

  // ✅ صور افتراضية في حال ما في صور
  const defaultImages = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800",
    "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800",
    "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  ];

  // ✅ التأكد من وجود صور
  const tripImages = (trip?.images && trip.images.length > 0) ? trip.images : defaultImages;

  // ✅ التمرير التلقائي للصور
  useEffect(() => {
    if (tripImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % tripImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [tripImages.length]);

  if (!trip) {
    return (
      <div className="not-found">
        <h2>😢 Trip not found</h2>
        <Link to="/trips" className="back-home-btn">Back to Trips</Link>
      </div>
    );
  }

  // ✅ إضافة تعليق جديد
  const handleAddComment = () => {
    if (!newComment.trim()) {
      alert("Please write a comment!");
      return;
    }
    
    const commentObj = {
      id: Date.now(),
      user: "Guest User",
      text: newComment.trim(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    
    setComments([commentObj, ...comments]);
    setNewComment("");
    alert("✅ Comment added successfully!");
  };

  // ✅ حذف تعليق
  const handleDeleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this comment?")) {
      setComments(comments.filter(c => c.id !== commentId));
    }
  };

  const handleBookClick = async () => {
    setIsBooking(true);
    await onBook(trip.id, false);
    setIsBooking(false);
  };

  const handleFreeBooking = async () => {
    if (freeTrips <= 0) {
      alert("❌ You don't have any free trips! Book 3 trips to get 1 free.");
      return;
    }
    setIsFreeBooking(true);
    await onBook(trip.id, true);
    setIsFreeBooking(false);
  };

  const getIcon = (type) => {
    if (type === "air") return "✈️";
    if (type === "land") return "🚄";
    if (type === "sea") return "🌊";
    return "🌍";
  };

  const getGradient = (type) => {
    switch(type) {
      case "air": return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
      case "sea": return "linear-gradient(135deg, #003973 0%, #00b4db 100%)";
      case "land": return "linear-gradient(135deg, #134e5e 0%, #71b280 100%)";
      default: return "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)";
    }
  };

  return (
    <div className="trip-details-container">
      {/* Animated Background */}
      <div className="animated-bg" style={{ background: getGradient(trip.type) }}>
        <div className="bg-particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 5}s`,
            }}></div>
          ))}
        </div>
      </div>

      <div className="trip-details-content">
        {/* Hero Slider */}
        <div className="hero-slider">
          <div className="slider-container">
            <img 
              src={tripImages[currentImageIndex]} 
              alt={trip.title}
              className="slider-image"
              onError={(e) => {
                e.target.src = defaultImages[0];
              }}
            />
            <div className="slider-overlay">
              <div className="slider-badge">
                <span className="trip-type">{getIcon(trip.type)} {trip.type.toUpperCase()}</span>
                {freeTrips > 0 && (
                  <span className="free-badge-small">🎁 {freeTrips} FREE trip(s) available!</span>
                )}
              </div>
              <h1 className="slider-title">{trip.title}</h1>
              <p className="slider-description">{trip.description}</p>
            </div>
            
            {/* Slider Navigation */}
            {tripImages.length > 1 && (
              <div className="slider-nav">
                <button 
                  className="slider-prev"
                  onClick={() => setCurrentImageIndex((prev) => prev === 0 ? tripImages.length - 1 : prev - 1)}
                >
                  ◀
                </button>
                <div className="slider-dots">
                  {tripImages.map((_, i) => (
                    <span 
                      key={i} 
                      className={`dot ${i === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(i)}
                    ></span>
                  ))}
                </div>
                <button 
                  className="slider-next"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % tripImages.length)}
                >
                  ▶
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="navigation-bar">
          <Link to="/trips" className="back-btn">
            <span>←</span> Back to Trips
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">💰</div>
            <div className="stat-info">
              <div className="stat-label">PRICE</div>
              <div className="stat-value">${trip.price}</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⏱️</div>
            <div className="stat-info">
              <div className="stat-label">DURATION</div>
              <div className="stat-value">{trip.duration} Days</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🪑</div>
            <div className="stat-info">
              <div className="stat-label">AVAILABLE</div>
              <div className="stat-value">{trip.seats} Seats</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-info">
              <div className="stat-label">RATING</div>
              <div className="stat-value">4.8 ★</div>
            </div>
          </div>
        </div>

        {/* Images Gallery */}
        {tripImages.length > 1 && (
          <div className="gallery-wrapper">
            <h2 className="section-title">
              <span>📸</span> Trip Gallery
            </h2>
            <div className="gallery-grid">
              {tripImages.slice(0, 4).map((img, i) => (
                <div 
                  key={i} 
                  className="gallery-card"
                  onClick={() => {
                    setCurrentImageIndex(i);
                    setIsModalOpen(true);
                  }}
                >
                  <img 
                    src={img} 
                    alt={`${trip.title} ${i+1}`}
                    onError={(e) => {
                      e.target.src = defaultImages[i % defaultImages.length];
                    }}
                  />
                  <div className="gallery-overlay">
                    <span>🔍 Click to view</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Places to Visit */}
        {trip.places && trip.places.length > 0 && (
          <div className="places-wrapper">
            <h2 className="section-title">
              <span>📍</span> Must-Visit Places
            </h2>
            <div className="places-list">
              {trip.places.map((place, i) => (
                <div key={i} className="place-item">
                  <span className="place-number">{i + 1}</span>
                  <span className="place-name">{place}</span>
                  <span className="place-arrow">→</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description */}
        <div className="description-wrapper">
          <h2 className="section-title">
            <span>📖</span> About This Adventure
          </h2>
          <div className="description-card">
            <p>{trip.description}</p>
            <div className="features">
              <span className="feature">✓ All inclusive</span>
              <span className="feature">✓ Professional guide</span>
              <span className="feature">✓ Free cancellation</span>
              <span className="feature">✓ 24/7 support</span>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="booking-section">
          <div className="booking-card-glass">
            <div className="booking-info">
              <div className="price-big">
                <span className="currency">$</span>
                <span className="amount">{trip.price}</span>
                <span className="period">/person</span>
              </div>
              <div className="booking-features">
                <div className="feature-item">✅ Best price guarantee</div>
                <div className="feature-item">🎁 Free travel insurance</div>
                <div className="feature-item">🔄 24/7 customer support</div>
              </div>
            </div>
            
            <div className="booking-buttons">
              <button 
                className={`book-btn-glow ${isBooking ? 'loading' : ''}`}
                onClick={handleBookClick}
                disabled={isBooking}
              >
                {isBooking ? (
                  <>
                    <div className="btn-spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">💰</span>
                    Book Now - ${trip.price}
                  </>
                )}
              </button>

              {freeTrips > 0 && (
                <button 
                  className={`free-book-btn ${isFreeBooking ? 'loading' : ''}`}
                  onClick={handleFreeBooking}
                  disabled={isFreeBooking}
                >
                  {isFreeBooking ? (
                    <>
                      <div className="btn-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">🎁</span>
                      Use FREE Trip! ({freeTrips} available)
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ====== COMMENTS SECTION ====== */}
        <div className="comments-wrapper">
          <h2 className="section-title">
            <span>💬</span> Traveler Reviews
            <span className="comments-count">({comments.length})</span>
          </h2>
          
          {/* Add Comment Form */}
          <div className="comment-form">
            <textarea
              placeholder="Share your experience about this trip..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              rows="3"
            />
            <button onClick={handleAddComment} className="submit-comment">
              📝 Post Review
            </button>
          </div>

          {/* Comments List */}
          <div className="comments-feed">
            {comments.length === 0 ? (
              <div className="empty-comments">
                <div className="empty-icon">💭</div>
                <h3>No Reviews Yet</h3>
                <p>Be the first to share your experience!</p>
              </div>
            ) : (
              comments.map((c) => (
                <div key={c.id} className="comment-card">
                  <div className="comment-avatar">
                    <span>👤</span>
                  </div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <strong className="comment-user">{c.user}</strong>
                      <span className="comment-date">{c.date} • {c.time}</span>
                      <button 
                        className="delete-comment"
                        onClick={() => handleDeleteComment(c.id)}
                        title="Delete comment"
                      >
                        🗑️
                      </button>
                    </div>
                    <p className="comment-text">{c.text}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="image-modal" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={tripImages[currentImageIndex]} alt="Full view" />
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            {tripImages.length > 1 && (
              <>
                <button 
                  className="modal-prev"
                  onClick={() => setCurrentImageIndex((prev) => prev === 0 ? tripImages.length - 1 : prev - 1)}
                >
                  ◀
                </button>
                <button 
                  className="modal-next"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % tripImages.length)}
                >
                  ▶
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TripDetails;