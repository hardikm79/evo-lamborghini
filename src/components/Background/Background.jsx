import "./Background.css";
import lam777 from "../../assets/lam777.jpg";
import lam12 from "../../assets/lam12.jpg";
import lam3 from "../../assets/lam3.jpg";
import lam4 from "../../assets/lam4.jpg";
import lam from "../../assets/lam.mp4";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={lam} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return (
      <img
        width="100px"
        height="100px"
        src={lam777}
        className="background fade-in"
        alt="lambo1"
      />
    );
  } else if (heroCount === 1) {
    return <img src={lam12} className="background fade-in" alt="lambo2" />;
  } else if (heroCount === 2) {
    return <img src={lam3} className="background fade-in" alt="lambo3" />;
  } else if (heroCount === 3) {
    return <img src={lam4} className="background fade-in" alt="lambo4" />;
  } else {
    return null; // Optional: fallback if heroCount is invalid
  }
};

export default Background;
