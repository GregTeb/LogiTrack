import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <button onClick={toggleDarkMode}>Toggle Theme</button>
      <Header title="TG Logistic" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TG Logistic</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
