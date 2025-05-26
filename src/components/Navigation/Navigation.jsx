import { NavLink } from "react-router-dom";

import css from "../App.module.css";

export default function Navigation({ activate }) {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activate}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activate}>
        Movie
      </NavLink>
    </nav>
  );
}
