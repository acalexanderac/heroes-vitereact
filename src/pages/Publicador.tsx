import { spiderman } from "../styles/imports";
import Publishers from "../components/subtables/publisher";
export default function Publicador() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            className="tracking-widest align-middle "
            src={spiderman}
            alt="LOGO"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="inline-flex items-center justify-center rounded-full  text-black mb-5">
              <Publishers />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
