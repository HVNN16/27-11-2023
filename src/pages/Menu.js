import React, { useState, useEffect } from "react";
import "../styles/Menu.css";
import MenuItem from "../helpers/menuItems";
import axios from "axios";

function Menu() {
  let [todos, setTodos] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/menuItems")
      .then((response) => {
        console.log("Response data:", response.data);
        setTodos([...response.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  let menuItems = todos.map((item, index) => (
    <MenuItem key={index} image={item.image} name={item.name} price={item.price} />
  ));

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">{menuItems}</div>
    </div>
  );
}

export default Menu;
