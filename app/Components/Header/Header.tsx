"use client";
import styles from "./header.module.css";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import {faEquals, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {useState } from "react";

config.autoAddCss = false;
const Header = () => {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prevVale) => !prevVale);
  }

  return (
    <>
      <nav>
        <div className={styles.main}>
          <Link className={styles.link} href="/">
            <div className={styles.nav_logo}>
              {/* backgorun Image */}
              <div className={styles.logo}>{/* logo */}</div>
            </div>
          </Link>

          {/* BAR ICON TOP OPEN NAV FOR SMALL SCREEN */}
          <div className={`${styles.barDiv}`}>
            <button onClick={toggleMenu} className={styles.btn}>
              <FontAwesomeIcon className={styles.barIcon} icon={faEquals} />
            </button>
          </div>

          <div
            className={` ${styles.nav_links} ${
              menu ? styles.showNavlink : styles.hideNavlink
            }`}
          >
            <ul>
              <li className={styles.li1}>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/Courses">Courses</Link>
              </li>
              <li>
                <Link href="/Aboutus">About us</Link>
              </li>
              <li>
                <Link href="/Contactus">Contact us</Link>
              </li>
              {/* 
      CROSS ICON FOR THE SMALLE SCREEN SIZE MENU */}

              <div className={`${styles.crossDiv}`}>
                <button onClick={toggleMenu} className={styles.btn}>
                  <FontAwesomeIcon
                    className={styles.crossIcon}
                    icon={faTimes}
                  />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
