import React, { useEffect, useState, useMemo } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ContactForm from "./components/ContactForm";

const App = () => {
  // Check localStorage for saved theme or default to light
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const heroData = useMemo(
    () => [
      { text1: "Temerario", text2: "You can't hide who you are" },
      { text1: "Reveulto", text2: "Feel the engine" },
      { text1: "Urus", text2: "Urus Performante" },
      { text1: "Huracan", text2: "Choose your Huracan" },
    ],
    []
  );

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // Toggle dark mode & save to localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroData.length]);

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <Navbar />

      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        playStatus={playStatus}
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
      />
      <ContactForm />
    </div>
  );
};

export default App;
