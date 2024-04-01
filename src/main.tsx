import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Creditos from "./pages/Creditos";
import Publicador from "./pages/Publicador";
import HeroesCrud from "./pages/heroes/page";
import NotFound from "./pages/Error";
import HeroForm from "./pages/heroes/agregar/page123";
import UpdateSuccess from "./pages/heroes/success/update";
import PostSuccess from "./pages/heroes/success/post";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/creditos", element: <Creditos /> },
      { path: "/publicador", element: <Publicador /> },
      { path: "/heroes", element: <HeroesCrud /> },
      { path: "/heroes/agregar", element: <HeroForm /> },
      { path: "*", element: <NotFound /> },
      { path: "/heroes/:id", element: <HeroForm /> },
      { path: "/heroes/success", element: <UpdateSuccess /> },
      { path: "/heroes/post-success", element: <PostSuccess /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
