import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

// ----- Pages ------ //
import HomePage from "./pages/HomePage";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Navigation />
                <section>
                    <Routes>
                        <Route path="homepage" element={<HomePage />} />
                        <Route path="page1" element={<PageOne />} />
                        <Route path="page2" element={<PageTwo />} />
                        <Route path="page3" element={<PageThree />} />
                    </Routes>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
