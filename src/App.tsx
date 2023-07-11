import { RouterProvider } from "react-router-dom";
import router from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <header className="w-screen h-[84px] bg-none">
        <div className="max-w-[1640px] mx-auto h-full flex items-center justify-between px-2 sm:px-4">
          <img src="/SkimpJr.ico" className="w-[76px] h-[76px]" alt="" />
          <Navbar />
        </div>
      </header>
      <main className="w-screen flex-grow">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col px-2 sm:px-4 text-center">
          <LandingPage />
        </div>
      </main> */}
    </>
  );
}

export default App;
