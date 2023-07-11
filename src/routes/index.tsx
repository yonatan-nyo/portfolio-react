import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/Landing/Page";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Navbar />
        <main className="w-screen flex-grow">
          <div className="max-w-[1440px] mx-auto h-full flex flex-col px-2 sm:px-4 text-center">
            <Outlet />
          </div>
        </main>
      </>
    ),
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
