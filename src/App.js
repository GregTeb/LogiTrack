import { useState } from "react";
import { useForm } from "react-hook-form";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Thank you for your message! We will contact you soon.");
    reset();
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
        <section className="contact-section">
          <h1>Contact us</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="form-input"
              />
              {errors.name && <p className="errors">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    massage: "Invalid email address",
                  },
                })}
                className="form-input"
              />
              {errors.email && <p className="errors">{errors.email.massage}</p>}
            </div>
            <div className="form-group">
              <lable htmlFor="phone">Phone</lable>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\+\d{1}\d{3}\d{3}\d{4}$/,
                    message: "Phone number must be in the format +7XXXXXXXXXX",
                  },
                })}
                className="form-imput"
              />
              {errors.phone && <p className="errors">{errors.phone.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                className="form-input"
              />
              {errors.massage && (
                <p className="errors">{errors.massage.massage}</p>
              )}
            </div>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </section>
        <section>
          <h1>Logistics Consulting</h1>
          <Consult
            title="Consulting services"
            description="Provide a comprehensive consultancy service for any of our services including: haulage, 
            storage, receiving and packing of goods"
          />
        </section>
      </main>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TG Logistic</p>
      </header>
      <Footer />
    </div>
  );
}

export default App;
