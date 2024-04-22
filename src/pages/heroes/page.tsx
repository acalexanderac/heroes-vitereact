import { Link } from "react-router-dom";
import HeroTable from "./table";
import { ubiquoLogo } from "../../styles/imports";

function HeroesCrud() {
  return (
    <>
      <div className="pl-5 pt-5 pb-5 grid place-items-center ">
        <div className="pl-5">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pb-5">
            <img
              className="tracking-widest align-middle "
              src={ubiquoLogo}
              alt="LOGO"
              width={70}
              height={70}
            />

            <span className="ml-3 text-2xl font-serif">Zendesk Clients</span>
          </a>
        </div>
        <div className="align-center pl-5 pb-10">
          <Link to="/heroes/agregar">
            <button className="text-white bg-red-900 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">
              Add Register
            </button>
          </Link>

          <Link to="/" className="pl-5">
            <button className="text-white bg-red-600 border-0 py-2 px-6 focus:outline-none pl-5 hover:bg-rose-500 rounded text-lg">
              Main Menu
            </button>
          </Link>
        </div>

        <div className=""></div>
      </div>

      <HeroTable />
    </>
  );
}

export default HeroesCrud;
