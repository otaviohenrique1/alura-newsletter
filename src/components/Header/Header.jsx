/* eslint-disable react/prop-types */
import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = ({ user }) => {
  return (
    <div className="flex h-20 bg-alura-200 dark:bg-dark-200 justify-between items-center px-5">
      <span className="text-gray-100 text-xl">Olá, {user?.name || "Usuario"}</span>
      <h1 className="text-gray-100 text-xl sm:hover:text-2xl sm:cursor-pointer">Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  );
}

export default Header;