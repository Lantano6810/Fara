import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServicePage from "./pages/ServicePage";
import UserCabinet from "./pages/UserCabinet";
import ServiceList from "./pages/ServiceList";
import Header from "./components/Header";
import OrderServicePage from "./pages/OrderServicePage.tsx";

function App() {
    return (
        <Router>
            <Header />
            <main className="w-100"> {/* Сделали ширину 100% + небольшие отступы */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/cabinet" element={<UserCabinet />} />
                    <Route path="/services" element={<ServiceList />} />
                    <Route path="/services/:id" element={<OrderServicePage />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;