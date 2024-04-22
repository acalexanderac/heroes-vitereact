import { useEffect } from "react";
import { ubiquoLogo } from "../../../styles/imports";
import toast from "react-hot-toast";

export default function PostSuccess() {
  useEffect(() => {
    toast.success("Heroe Agregado!");
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="tracking-widest align-middle"
          src={ubiquoLogo}
          alt="LOGO"
          width={400}
          height={400}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Heroe Agregado!
          </h1>
          <p className="mb-8 leading-relaxed">
            Si deseas editarlo o eliminarlo, puedes hacerlo en la tabla de
            héroes.
          </p>
        </div>
      </div>
    </section>
  );
}
