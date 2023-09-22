import ToggleTheme from "../ToggleTheme/ToggleTheme";

const Header = () => {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center px-5">
      <span className="text-gray-100 text-xl">Olá, usuario</span>
      <h1 className="text-gray-100 text-xl">Alura Newsletter</h1>
      {/* <input className="hidden sm:block" type="checkbox" /> */}
      <ToggleTheme />
    </div>
  );
}

export default Header;