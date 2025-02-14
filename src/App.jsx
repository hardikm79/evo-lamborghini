import React, { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Temerario", text2: "You can't hide who you are" },
    { text1: "Reveulto", text2: "Feel the engine" },
    {
      text1: "Urus",
      text2: "Urus Performante",
    },
    { text1: "Huracan", text2: "Choose your Huracan" },
  ];

  const [heroCount, setHeroCount] = useState(0);

  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 3 ? 0 : count + 1));
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        heroData={heroData[heroCount]}
        playStatus={playStatus}
        heroCount={heroCount}
        setPlayStatus={setPlayStatus}
        setHeroCount={setHeroCount}
      />
    </div>
  );
};

export default App;
