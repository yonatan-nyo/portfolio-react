import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <header className="w-screen h-16 bg-white">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between">
          <h1 className="text-xl font-semibold">Yonatan | SkimpJr</h1>
          <Navbar />
        </div>
      </header>
      <main className="w-screen flex-grow bg-slate-50">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col">
          <p>asd</p>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
      </main>
    </>
  );
}

export default App;
