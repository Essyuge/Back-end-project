import { useState } from "react";
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import About from "./components/About";
import ProjectsContainer from "./components/ProjectsContainer";

import Home from "./components/Home";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

export default App;