import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [closing, setClosing] = useState(false);

  const ToggleAction = () => setToggle(!toggle);

  const closeMenu = () => {
    if (toggle) {
      setClosing(true);
      setTimeout(() => {
        setToggle(false);
        setClosing(false);
      }, 500);
    }
  };

 

  return (
    <header
      className={`header ${isHome ? "home-header" : "inner-header"} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="contain">
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <div className="nav-top">
          <div className="logo">
            <Link href="/" onClick={closeMenu}>
              <img src="/images/logo.png" alt="Oyo Kids" className="nav-logo" />
            </Link>
          </div>

          

          <nav
            id="nav"
            className={`${toggle ? "active" : ""} ${closing ? "closing" : ""}`}
          >
            <ul className="nav-links">
              <li><Link href="#features" onClick={closeMenu}>Features</Link></li>
              <li><Link href="#how" onClick={closeMenu}>How It Works</Link></li>
              <li><Link href="#vocab" onClick={closeMenu}>Lessons</Link></li>
              <li><Link href="#pricing" onClick={closeMenu}>Pricing</Link></li>
              <li><Link href="#faq" onClick={closeMenu}>FAQ</Link></li>
              <li className="hide_desk"><Link href="/login" className="nav-login" onClick={closeMenu}>
                Log In
              </Link></li>
              <li className="hide_desk">
                <Link href="/login" className="nav-signup" onClick={closeMenu}>
                Start Free
              </Link>
              </li>
            </ul>

            
          </nav>
          <div className="nav-right bTn">
              <Link href="/login" className="nav-login" onClick={closeMenu}>
                Log In
              </Link>
              <Link href="/register" className="nav-signup" onClick={closeMenu}>
                Start Free
              </Link>
            </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </header>
  );
}