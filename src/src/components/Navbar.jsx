import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">WortiseBlog</div>
      <div className="navmenu">
        <button className="button">Singin</button>
        <button className="button">Singup</button>
      </div>
    </nav>
  );
};

export default Navbar;
