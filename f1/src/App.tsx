import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./components/shared/MainNavigation";
import Footer from "./components/shared/Footer";
import { HomePage, AdminPage } from "./pages";
import { DriversProvider } from "./contexts/DriversContext";
import { TeamsProvider } from "./contexts/TeamsContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <DriversProvider>
          <TeamsProvider>
            <main className="container">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/admin" element={<AdminPage />}></Route>
              </Routes>
            </main>
          </TeamsProvider>
        </DriversProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
