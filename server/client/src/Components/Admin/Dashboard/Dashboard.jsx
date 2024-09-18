import { useAuth } from '../../../Utils/auth';
import AddDevice from '../AddDevice/AddDevice';
import DeviceList from '../DeviceList/DeviceList';
import GMap from '../GMap/GMap';

import './Dashboard.css';

export default function Dashboard() {

    const { devices } = useAuth();

    return (
        <>
            {/* <div className="members">
                <div className="members__top">
                    <h4>Device Location</h4>
                </div> */}
                <GMap />
            {/* </div> */}
            <div className="members">
                <div className="members__top">
                    <h4>Device List</h4>
                </div>
                <AddDevice />
                <ul className="members__user">
                    {
                        devices.map((device, index) => {
                            const { name, rssi, _id } = device;
                            return <DeviceList name={name} rssi={rssi} key={index} id={_id} />
                        })
                    }
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
                    {
                        devices.map((device, index) => {
                            const { name, rssi, isActive } = device;
                            if (!isActive) {
                                return null;
                            }
                            return <DeviceList name={name} rssi={rssi} key={index} />
                        })
                    }
                </ul>
            </div>
        </>
    )
}
