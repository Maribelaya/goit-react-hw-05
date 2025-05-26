import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>Not found page...</p>
      <NavLink to="/">Back to home page</NavLink>{" "}
    </div>
  );
}
