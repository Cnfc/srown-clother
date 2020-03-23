import React, { useState, useEffect, useRef } from "react";

import Card from "./Card";

const Hooks = () => {
  const [user, setUser] = useState("Init");
  const [searchQuery, setSearchQuery] = useState("Bret");
  const inputRef = useRef();

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        console.log("k");
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
        );
        const resJson = await res.json();
        setUser(resJson[0]);
      };
      fetchFunc();
    }
  }, [searchQuery]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Card>
        <input
          ref={inputRef}
          type="search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />

        {user ? (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default Hooks;
