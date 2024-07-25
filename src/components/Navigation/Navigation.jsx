import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
  const navigationItemClass = ({ isActive }) => {
    return clsx(classes.navItem, isActive && classes.active);
  };
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink to="/" className={navigationItemClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={navigationItemClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;