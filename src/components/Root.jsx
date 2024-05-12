import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            <div className="mb-6">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <div className="mt-6">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;