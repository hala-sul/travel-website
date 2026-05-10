// src/utils/user.js
export const getUser = () => {
    const data = localStorage.getItem("user");
    if (data) return JSON.parse(data);
    const defaultUser = { balance: 5000, booked: [], favorites: [], points: 0 };
    localStorage.setItem("user", JSON.stringify(defaultUser));
    return defaultUser;
  };
  
  export const saveUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };
  
  // حجز الرحلة
  export const bookTrip = (trip) => {
    const user = getUser();
    if (user.balance < trip.price) {
      alert("Not enough balance!");
      return false;
    }
    user.balance -= trip.price;
    user.points += 1;
    user.booked.push(trip.id);
    saveUser(user);
    alert("Trip booked! You earned 1 point.");
    return true;
  };
  
  // اضافة / ازالة من المفضلة
  export const toggleFavorite = (tripId) => {
    const user = getUser();
    if (user.favorites.includes(tripId)) {
      user.favorites = user.favorites.filter(id => id !== tripId);
    } else {
      user.favorites.push(tripId);
    }
    saveUser(user);
  };