import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Nav">
      <div className="nav-logo"> EVO </div>

      <ul className="nav-menu">
        <li> Models </li>
        <li> Beyond </li>
        <li> Ownership </li>
        <li> MotorSport </li>
        <li className="nav-store"> Store </li>
      </ul>
    </div>
  );
};

export default Navbar;
