import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserList from './components/UserList';

function App() {
  const [user, setUser] = useState(null); // Logged-in user
  const [isNewUser, setIsNewUser] = useState(false); // Track if the user is new or returning

  // Simulate the user data (normally, this would come from an API or database)
  const users = [
    { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
    { id: 2, name: 'Regular User', email: 'user@example.com', role: 'user' },
  ];

  // Check if there's a logged-in user (to manage the flow)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    } else {
      setIsNewUser(true); // No user found, show the signup page
    }
  }, []);

  const handleSignUp = (newUser) => {
    setUser(newUser);
    setIsNewUser(false); // After signing up, treat the user as returning
    localStorage.setItem('user', JSON.stringify(newUser)); // Store user in localStorage
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser); // Log the user in
    localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user in localStorage
  };

  return (
    <Router>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">User Authentication</h1>

        <Routes>
          {/* Route to SignUp page (for new users) */}
          {isNewUser && (
            <Route path="/" element={<SignUp onSignUp={handleSignUp} />} />
          )}

          {/* Route to Login page (for existing users) */}
          {!user && (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}

          {/* After login, show user list */}
          {user && (
            <Route path="/dashboard" element={<UserList users={users} currentUser={user} />} />
          )}

          {/* Redirect to dashboard if already logged in */}
          {user && <Route path="/" element={<Navigate to="/dashboard" />} />}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
