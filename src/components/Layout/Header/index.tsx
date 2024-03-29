import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Scrollspy from 'react-scrollspy';

import { menuItems } from './utils';
import * as styles from './style.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

  const toggleRef: any = useRef(null);
  const menuRef: any = useRef(null);

  const closeOpenMenus = (e: any): void => {
    if (
      toggleRef.current &&
      isMenuOpen &&
      !toggleRef.current.contains(e.target) &&
      menuRef.current &&
      !menuRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkPress = (): void => {
    setIsMenuOpen(false);
  };

  const handleChangeBackground = () => {
    if (window.scrollY >= 300) {
      setIsHeaderTransparent(false);
    } else {
      setIsHeaderTransparent(true);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setIsHeaderTransparent(false);
      document.documentElement.style.overflowY = 'hidden';
    } else {
      handleChangeBackground();
      document.documentElement.style.overflowY = 'unset';
    }

    document.addEventListener('mousedown', closeOpenMenus);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleChangeBackground);
  }, []);

  return (
    <header
      className={`${
        isHeaderTransparent ? styles.headerTransparent : styles.darkHeader
      } text-white py-4 text-center fixed w-full text-lg font-ligh z-10 px-5 transition-color duration-500 ease-out ${
        isMenuOpen ? styles.menuOpen : ''
      }`}
    >
      <div className="container grid grid-cols-2 md:grid-cols-3 md:gap-4 items-center">
        <div className={styles.logo}>
          <Link to="/">
            <h1 className="text-emerald-500">George Pustovit</h1>
          </Link>
        </div>
        <button
          className={`${styles.toggleButton} block md:hidden justify-self-end ${
            isMenuOpen && styles.active
          } z-10`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          ref={toggleRef}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={`p-5 md:p-0 bg-gray-900 md:bg-transparent md:col-span-2 md:grid md:grid-cols-2 md:gap-4 items-center ${
            styles.mobileMenu
          } ${isMenuOpen && styles.active}`}
          ref={menuRef}
        >
          <nav className={styles.nav}>
            <Scrollspy
              items={menuItems.map((item) => item.name.toLowerCase())}
              currentClassName={styles.currentLink}
              offset={0}
            >
              {menuItems.map((menuItem) => (
                <li
                  key={menuItem.name}
                  className="relative transition duration-300 mb-4 md:mb-0"
                >
                  <Link
                    to={menuItem.link}
                    className="transition duration-300"
                    onClick={handleLinkPress}
                  >
                    <span>{menuItem.name}</span>
                  </Link>
                </li>
              ))}
            </Scrollspy>
          </nav>
          <div>
            <a
              href="/George_Pustovit_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block border-emerald-500 px-4 py-1 border rounded-lg capitalize text-lg  ${styles.resumeLink} transition-all duration-500 ease-in-out`}
              onClick={handleLinkPress}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
