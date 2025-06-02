import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Service from "./Components/Service";
import Consult from "./Components/Consult";
import logo from "./logo.svg";
import sunIcon from "./img/sun.svg";
import moonIcon from "./img/moon.svg";
import heroBg from "./img/hero-bg.jpg";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    reset();
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : ""}`}>
      <Header title="LogiTrack">
        <button onClick={toggleDarkMode} className="theme-toggle">
          <img
            src={isDarkMode ? sunIcon : moonIcon}
            alt={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="theme-icon"
          />
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </Header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Добро пожаловать в LogiTrack</h1>
            <p>
              Ваш надежный партнер в области логистики и транспортных решений.
            </p>
            <button className="hero-button">Получить расценки</button>
          </div>
        </section>
        <section>
          <h1>Our Service</h1>
          <Service
            title="Логистика и транспорт"
            description="Надежная доставка всех товаров по всей стране"
          />
          <Service
            title="Складское хранение"
            description="Безопасное и эффективное решение для хранения данных"
          />
          <Service
            title="Таможенное оформление"
            description="Быстрые и соответствующие требованиям таможенные услуги"
          />
        </section>
        <section className="contact-section">
          <h1>Свяжитесь с нами</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
              <label htmlFor="Name">Имя</label>
              <input
                id="Name"
                {...register("name", { required: "Имя обязательно" })}
                className="form-input"
              />
              {errors.name && <p className="errors">{errors.name.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Адрес электронной почты</label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Требуется адрес электронной почты",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    massage: "Invalid email address",
                  },
                })}
                className="form-input"
              />
              {errors.email && <p className="errors">{errors.email.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Номер телефон</label>
              <input
                id="phone"
                type="tel"
                {...register("phone", {
                  required: "Требуется номер телефона",
                  pattern: {
                    value: /^\+\d{1}\d{3}\d{3}\d{4}$/,
                    message:
                      "Номер телефона должен быть в формате +7XXXXXXXXXX",
                  },
                })}
                className="form-input"
              />
              {errors.phone && <p className="errors">{errors.phone.message}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                {...register("message", { required: "Сообщение обязательно" })}
                className="form-input"
              />
              {errors.massage && (
                <p className="errors">{errors.message.message}</p>
              )}
            </div>
            <button type="submit" className="form-submit">
              Отправить сообщение
            </button>
          </form>
        </section>
        <section>
          <h1>Консалтинг в области логистики</h1>
          <Consult
            title="Консалтинговые услуги"
            description="Предоставляем комплексные консультационные услуги по любым из наших услуг, включая: перевозку, 
            хранение, приемку и упаковку товаров"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
