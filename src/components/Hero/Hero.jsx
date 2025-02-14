import "./Hero.css";
import play from "../../assets/play.png";
import arrow from "../../assets/arrow.png";
import pause from "../../assets/pause.png";

const Hero = ({
  heroData,
  setPlayStatus,
  setHeroCount,
  playStatus,
  heroCount,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p> {heroData.text1} </p>
        <p> {heroData.text2} </p>
      </div>

      <div className="hero-explore">
        <p> explore the features </p>
        <img src={arrow} alt="arr" style={{ width: "30px", height: "30px" }} />
      </div>

      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          >
            {" "}
          </li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          >
            
            {" "}
          </li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          >
            {" "}
          </li>
          <li
            onClick={() => setHeroCount(3)}
            className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}
          >
            {" "}
          </li>
        </ul>

        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause : play}
            alt="play"
            style={{ width: "30px", height: "30px" }}
          />
          <p> see the video </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
