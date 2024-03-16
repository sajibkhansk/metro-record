import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Main.css'


const Main = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    return (
        <div className="h-screen overflow-y-scroll hide-scrollbar bg-gray-50" >
            <div className="max-w-screen-xl mx-auto bg-gray-100 border px-1 py-1 rounded-sm">
                <Outlet></Outlet>
                {/* <Footer></Footer> */}
                {isHomePage && <Footer />}
            </div>
        </div>
    );
};

export default Main;