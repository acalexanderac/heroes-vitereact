import { NavLink } from "react-router-dom";
import { ubiquoLogoTexto } from "../styles/imports";
export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font sticky top-0 bg-white z-10 ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky top-0">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
            <img
              className="tracking-widest align-middle"
              src={ubiquoLogoTexto}
              alt="LOGO"
              width={200}
              height={200}
            />
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400  text-black flex flex-wrap items-center text-base justify-center">
            <NavLink
              className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                  transition-all duration-200 rounded-lg"
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                  transition-all duration-200 rounded-lg"
              to="/heroes"
            >
              Búsqueda Héroes
            </NavLink>
            <NavLink
              className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                  transition-all duration-200 rounded-lg "
              to="/publicador"
            >
              Publicador
            </NavLink>
            <NavLink
              className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                  transition-all duration-200 rounded-lg "
              to="/errores"
            >
              Error
            </NavLink>
            <NavLink
              className="mr-5 hover:text-black  hover:bg-gray-300 px-4 py-2.5 flex
                  transition-all duration-200 rounded-lg"
              to="/creditos"
            >
              Créditos
            </NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
}
