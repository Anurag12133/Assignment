import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Computer Engineering</h1>
      <p>142,765 Computer Engineers follow this</p>
      <div className="location">
        <span>Noida, India</span>
        <span className="edit-location">✎</span>
      </div>
    </div>
  );
};

export default Header;
