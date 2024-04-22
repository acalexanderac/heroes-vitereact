import "../src/styles/App.css";
import { reach } from "./styles/imports";
function App() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              className="tracking-widest align-middle "
              src={reach}
              alt="LOGO"
            />
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Search by Techs
                </h2>
                <p className="leading-relaxed text-base">
                  Discover potential clients leveraging cutting-edge
                  technologies such as WooCommerce, Zendesk, and more. Feel free
                  to explore our extensive database to find your next business
                  opportunity
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center"></a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Based on your needs{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  Apply filters to find the perfect client for your business.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center"></a>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Credits
                </h2>
                <p className="leading-relaxed text-base">
                  This project was developed by a passionate dev by day, gamer
                  at night. Proud to present you this awesome project. Feel free
                  to explore and reach out.
                </p>
                <a className="mt-3 text-red-500 inline-flex items-center"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
