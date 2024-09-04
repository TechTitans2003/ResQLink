import SideBar from "../../Components/Admin/SideBar/SideBar"
import TopBar from "../../Components/Admin/TopBar/TopBAr";

const Admin = () => {
    return (
        <>
            <SideBar />
            <section id="main">
                <TopBar />
            </section>
        </>
    )
}

export default Admin;