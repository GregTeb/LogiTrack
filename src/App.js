import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Service from "./Components/Service";
import Consult from "./Components/Consult";
import logo from "./logo.svg";
import sunIcon from "./img/sun.svg";
import moonIcon from "./img/moon.svg";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <button onClick={toggleDarkMode}>
        Toggle Theme
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="theme-icon"
        />
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Header title="TG Logistic" />
      <main>
        <section>
          <h1>Our Service</h1>
          <Service
            title="Logistic and Transportation"
            description="Reliable delivery of all goods across the country"
          />
          <Service
            title="Warehouse Storage"
            description="Secure and efficient storage solution"
          />
          <Service
            title="Custom Clearance"
            description="Fast and compliant custom services"
          />
        </section>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TG Logistic</p>
      </header>
      <main>
        <section>
          <h1>Logistics Consulting</h1>
          <Consult
            title="Consulting services"
            description="Предоставляем комплексные услуги по консультированию любых наших услуг, 
            включая: грузоперевозки, хранение, принятие и упаковка грузов"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
