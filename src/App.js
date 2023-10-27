import React, { useState, useEffect } from "react";
import Search from "./components/Search/Seacrh";
import UserCard from "./components/UserCard/UserCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:3000")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setAllUsers(data);
        setFilteredUsers(data); // По умолчанию показываем всех пользователей
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const lowerCaseTerm = term.toLowerCase();
    const users = allUsers.filter((user) =>
      user.name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredUsers(users);
  };

  return (
    <div className="app">
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div className="users-container">
          {filteredUsers.length ? (
            filteredUsers.map((user, index) => (
              <UserCard key={index} user={user} />
            ))
          ) : (
            <div>No users found.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
