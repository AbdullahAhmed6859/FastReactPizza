import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 disabled:cursor-not-allowed disabled:bg-yellow-400/50 disabled:text-stone-800/60";

  const styles = {
    primary: base + " " + "px-3 py-2 sm:px-5 sm:py-3 text-sm",
    small: base + " " + "px-3 py-1 sm:px-5 sm:py-3 text-xs md:py-3.5",
    round: base + " " + "px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm",
    secondary:
      "text-sm inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 disabled:cursor-not-allowed px-3 py-1.5 sm:px-5 sm:py-2.5",
  };

  if (to && !onClick)
    return (
      <Link to={to} disabled={disabled} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick && !to)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
