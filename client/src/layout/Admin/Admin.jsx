import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Admin/SideBar/SideBar"
import TopBar from "../../Components/Admin/TopBar/TopBAr";

const Admin = () => {
    return (
        <>
            <SideBar />
            <section id="main">
                <TopBar />
                <div className="main__body">
                    <Outlet />
                </div>
            </section>
        </>
    )
}

export default Admin;