import { Link } from 'gatsby';
import React, { useState } from 'react';

import Button from '../Button';

import { menuItems } from './utils';
import * as styles from './style.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 text-center">
      <div className="container grid grid-cols-2 md:grid-cols-3 md:gap-4 font-light items-center px-5">
        <div>
          <Link to="/">
            <h1>George Pustovit</h1>
          </Link>
        </div>
        <div
          className={`${styles.toggleButton} block md:hidden justify-self-end ${
            isMenuOpen && styles.active
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
        </div>
        <div
          className={`p-5 md:p-0 bg-gray-900 md:bg-transparent md:col-span-2 md:grid md:grid-cols-2 md:gap-4 items-center ${
            styles.mobileMenu
          } ${isMenuOpen && styles.active}`}>
          <nav>
            <ul className="md:flex justify-between">
              {menuItems.map((menuItem) => (
                <li key={menuItem.name}>
                  <Link to={menuItem.link}>{menuItem.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Button text="Contact Me" onClick={() => console.log(123)} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
