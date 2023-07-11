import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import LandingPage from "../pages/Landing/Page";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <header className="fixed w-screen h-[84px] bg-none top-0 left-0 z-[100] bg-[#f4f6f5]">
          <div className="max-w-[1640px] mx-auto h-full flex items-center justify-between px-2 sm:px-4">
            <img src="/SkimpJr.ico" className="w-[76px] h-[76px]" alt="" />
            <Navbar />
          </div>
        </header>
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
