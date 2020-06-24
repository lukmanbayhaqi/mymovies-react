import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu, Button } from "semantic-ui-react";

export default function Navbar({ colorBg }) {
  const history = useHistory();
  const [activeItem, setActiveItem] = useState("home");
  const [darkMode, setDarkMode] = useState("off");

  function onOffDarkMode() {
    if (darkMode === "off") {
      setDarkMode("on");
      colorBg(true);
    } else {
      setDarkMode("off");
      colorBg(false);
    }
  }

  return (
    <Menu attached="top" inverted>
      <Menu.Item header>MyMovies</Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => {
          setActiveItem("home");
          history.push("/");
        }}
      />
      <Menu.Item
        name="favorites"
        active={activeItem === "favorites"}
        onClick={() => {
          setActiveItem("favorites");
          history.push("/favorites");
        }}
      />
      <Menu.Item position="right">
        <Button onClick={() => onOffDarkMode()} color="black">
          Dark Mode: {darkMode}
        </Button>
      </Menu.Item>
    </Menu>
  );
}
