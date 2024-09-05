import { Outlet } from 'react-router-dom';
import Insight from '../../Components/Admin/Insight/Insight';

import './UserAdmin.css';

const UserAdmin = () => {
    return (
        <>
            <Insight />
            <div className="main__body__data">
                <Outlet />
            </div>
        </>
    )
}


export default UserAdmin;