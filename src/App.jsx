import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripDetails from "./pages/TripDetails";
import Bookings from "./pages/Booked";
import Favorites from "./pages/Favorites";
import Points from "./pages/Points";
import Login from "./pages/Login";

import { tripsData } from "./data/Trips";

function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // باقي الكود كما هو...
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [points, setPoints] = useState(() => {
    const savedPoints = localStorage.getItem("points");
    return savedPoints ? JSON.parse(savedPoints) : 0;
  });

  const [freeTrips, setFreeTrips] = useState(() => {
    const savedFree = localStorage.getItem("freeTrips");
    return savedFree ? JSON.parse(savedFree) : 0;
  });

  const [balance, setBalance] = useState(() => {
    const savedBalance = localStorage.getItem("balance");
    return savedBalance ? JSON.parse(savedBalance) : 5000;
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("bookings", JSON.stringify(bookings));
    localStorage.setItem("favorites", JSON.stringify(favorites));
    localStorage.setItem("points", JSON.stringify(points));
    localStorage.setItem("freeTrips", JSON.stringify(freeTrips));
    localStorage.setItem("balance", JSON.stringify(balance));
  }, [user, bookings, favorites, points, freeTrips, balance]);

  const handleBook = (tripId, useFree = false) => {
    if (!user) {
      alert("❌ Please login first to book a trip!");
      return false;
    }
    // باقي الكود...
    const trip = tripsData.find((t) => t.id === tripId);
    if (!trip) return false;

    const alreadyBooked = bookings.find((b) => b.id === tripId);
    if (alreadyBooked) {
      alert("❌ You already booked this trip!");
      return false;
    }

    if (useFree) {
      if (freeTrips <= 0) {
        alert("❌ You don't have any free trips! Book 3 regular trips to get 1 free.");
        return false;
      }

      setBookings([...bookings, { 
        ...trip, 
        price: 0, 
        isFree: true, 
        bookedAt: new Date().toISOString() 
      }]);
      setFreeTrips(freeTrips - 1);
      
      alert(`🎉 ${trip.title} booked for FREE! 🎉\nYou have ${freeTrips - 1} free trip(s) left.`);
      return true;
    }

    if (balance < trip.price) {
      alert(`❌ Insufficient balance! You need $${trip.price} but you have $${balance}`);
      return false;
    }

    setBookings([...bookings, { ...trip, bookedAt: new Date().toISOString() }]);
    setBalance(balance - trip.price);

    const newPoints = points + 1;
    setPoints(newPoints);

    const newFreeTrips = Math.floor(newPoints / 3);
    const earnedFreeTrips = newFreeTrips - freeTrips;

    if (earnedFreeTrips > 0) {
      setFreeTrips(newFreeTrips);
      alert(`✅ ${trip.title} booked!\n💰 $${trip.price} deducted\n⭐ +1 point!\n🎉 You got ${earnedFreeTrips} FREE trip(s)!`);
    } else {
      const pointsToNext = 3 - (newPoints % 3);
      alert(`✅ ${trip.title} booked!\n💰 $${trip.price} deducted\n⭐ +1 point!\n📊 ${pointsToNext} more points for FREE trip!`);
    }

    return true;
  };

  const handleCancel = (id) => {
    const cancelledTrip = bookings.find((t) => t.id === id);
    if (!cancelledTrip) return;

    setBookings(bookings.filter((t) => t.id !== id));

    if (!cancelledTrip.isFree) {
      setBalance(balance + cancelledTrip.price);
      const newPoints = Math.max(0, points - 1);
      setPoints(newPoints);
      const newFreeTrips = Math.floor(newPoints / 3);
      setFreeTrips(newFreeTrips);
      alert(`✗ ${cancelledTrip.title} cancelled!\n💰 $${cancelledTrip.price} refunded\n⭐ You lost 1 point.`);
    } else {
      alert(`✗ ${cancelledTrip.title} (FREE trip) cancelled!`);
    }
  };

  const handleToggleFavorite = (tripId) => {
    if (!user) {
      alert("❌ Please login to add favorites!");
      return;
    }

    setFavorites(prev => {
      if (prev.includes(tripId)) {
        return prev.filter(id => id !== tripId);
      } else {
        return [...prev, tripId];
      }
    });
  };

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("bookings");
    localStorage.removeItem("favorites");
    localStorage.removeItem("points");
    localStorage.removeItem("freeTrips");
    localStorage.removeItem("balance");
    
    setUser(null);
    setBookings([]);
    setFavorites([]);
    setPoints(0);
    setFreeTrips(0);
    setBalance(5000);
    
    alert("👋 You have been logged out successfully!");
    window.location.href = "/login";
  };

  const favoriteTrips = tripsData.filter(trip => favorites.includes(trip.id));

  return (
    <>
      {user && <Navbar 
        balance={balance} 
        points={points} 
        freeTrips={freeTrips} 
        user={user}
        onLogout={handleLogout}
      />}
      
      <Routes>
        {/* ✅ إذا ما في مستخدم مسجل -> يروح للوجين */}
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        
        {/* ✅ باقي الصفحات محمية -> فقط إذا مسجل دخول */}
        <Route 
          path="/trips" 
          element={user ? <Trips 
            tripsData={tripsData} 
            onBook={handleBook}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            freeTrips={freeTrips}
          /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/trip/:id" 
          element={user ? <TripDetails 
            tripsData={tripsData} 
            onBook={handleBook}
            freeTrips={freeTrips}
          /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/booked" 
          element={user ? <Bookings 
            bookings={bookings} 
            onCancel={handleCancel}
          /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/favorites" 
          element={user ? <Favorites 
            favoriteTrips={favoriteTrips}
            onToggleFavorite={handleToggleFavorite}
            onBook={handleBook}
            freeTrips={freeTrips}
          /> : <Navigate to="/login" />} 
        />
        
        <Route 
          path="/points" 
          element={user ? <Points 
            points={points}
            freeTrips={freeTrips}
            bookings={bookings}
            balance={balance}
          /> : <Navigate to="/login" />} 
        />
      </Routes>
    </>
  );
}

export default App;