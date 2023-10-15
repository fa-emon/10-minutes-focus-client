import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";



const Main = () => {
    const location = useLocation();
    const isOnErrorPage = location.pathname === "/errorPage";

    return (
        <div>
            {!isOnErrorPage && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!isOnErrorPage && <Footer></Footer>}
        </div>
    );
};

export default Main;