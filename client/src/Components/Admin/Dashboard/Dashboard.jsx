import AddDevice from '../AddDevice/AddDevice';
import DeviceList from '../DeviceList/DeviceList';

import './Dashboard.css';

export default function Dashboard() {
    return (
        <>
            <div className="members">
                <div className="members__top">
                    <h4>Device List</h4>
                </div>
                <AddDevice />
                <ul className="members__user">
                    <DeviceList />
                </ul>
            </div>
            <div className="members">
                <div className="members__top">
                    <h4>Active Device List</h4>
                    <div className="members__menu">
                        <i className="ph-dots-three-outline-vertical-fill"></i>
                        <ul className="menu">
                            <li>
                                <a href="#">Edit</a>
                            </li>
                            <li>
                                <a href="#">Remove</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="members__user">
                    <DeviceList />
                </ul>
            </div>
        </>
    )
}
