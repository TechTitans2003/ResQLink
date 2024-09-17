import { useState, useEffect } from 'react';
import AddDevice from '../AddDevice/AddDevice';
import DeviceForm from '../DeviceForm/DeviceForm';
import DeviceList from '../DeviceList/DeviceList';
import './DeviceDetails.css';
import { useAuth } from '../../../Utils/auth';
import { Outlet } from 'react-router-dom';

export default function DeviceDetails() {
    const { devices } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredDevices = devices.filter(device =>
        device.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="members">
                <div className="members__top">
                    <h4>Device List</h4>
                </div>
                <div className="device-box">
                    <AddDevice />
                    <div className="search-device">
                        <label htmlFor="search">Search Device</label>
                        <input
                            name='search'
                            type="text"
                            placeholder='Search Device'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <button>Search</button>
                    </div>
                </div>
                <ul className="members__user">
                    {filteredDevices.map((device, index) => {
                        const { name, rssi, _id } = device;
                        return <DeviceList name={name} rssi={rssi} id={_id} key={index} />;
                    })}
                </ul>
            </div>

            <Outlet />
        </>
    );
}
