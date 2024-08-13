// App.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // You can also store the token in localStorage/sessionStorage if needed
    localStorage.setItem('authToken', userData.token);
  };

  return (
    <div className="app">
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome back!</h1>
          {/* Add more components or routes here for logged-in users */}
        </div>
      )}
    </div>
  );
};

export default App;
