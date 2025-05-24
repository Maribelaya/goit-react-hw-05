// import clsx from "clsx";
// import { NavLink } from "react-router-dom";
// import css from "./Navigation.module.css";

// const getActiveLinkClass = ({ isActive }) => {
//   return clsx(css.link, isActive && css.isActive);
// };

// export default function Navigation() {
//   return (
//     <header className={css.header}>
//       <nav className={css.nav}>
//         <NavLink to="/" className={getActiveLinkClass}>
//           Home
//         </NavLink>
//         <NavLink to="/movies" className={getActiveLinkClass}>
//           Movies
//         </NavLink>
//       </nav>
//     </header>
//   );
// }

import { NavLink } from "react-router-dom";
// import clsx from "clsx";
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
