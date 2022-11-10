import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import Scrollspy from 'react-scrollspy';

import Button from '@components/Button';

import { menuItems } from './utils';
import * as styles from './style.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const closeOpenMenus = (e) => {
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

  const handleContactMePress = (): void => {
    document.location = 'mailto:gorapus@gmail.com';
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', closeOpenMenus);
  }, [isMenuOpen]);

  return (
    <header
      className={`bg-gray-900 text-white py-4 text-center fixed w-full text-lg font-ligh z-10 px-5 ${
        isMenuOpen ? styles.menuOpen : ''
      }`}
    >
      <div className="container grid grid-cols-2 md:grid-cols-3 md:gap-4 items-center">
        <div>
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
            <Button text="Contact Me" onClick={handleContactMePress} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
