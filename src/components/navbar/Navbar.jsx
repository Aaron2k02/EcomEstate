import {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import {UserContext} from "../../data/userContext.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>EcomEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/list">Estate</a>
        {user && user.isAdmin && <a href="/dashboard">Dashboard</a>}
        {user && user.isAgent && <a href="/landLordDashboard">Dashboard</a>}
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>{user.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          {!user && (
            <>
              <a href="/">Sign in</a>
              <a href="/">Sign up</a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
