import React from "react";
import { Link } from "react-router-dom";

import { NavigationItem } from "./types.td";

import styles from "./header.module.scss";

export interface HeaderProps {
  items?: NavigationItem[];
}

const Header = ({ items }: HeaderProps) => (
  <header className={styles.header}>
    <nav>
      <ul>
        {items?.map((item, index) => (
          <li key={`${item.name}-#${index}`}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
