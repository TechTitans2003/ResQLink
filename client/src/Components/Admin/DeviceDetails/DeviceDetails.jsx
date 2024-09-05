import { useState, useEffect } from 'react';
import AddDevice from '../AddDevice/AddDevice';
import DeviceForm from '../DeviceForm/DeviceForm';
import DeviceList from '../DeviceList/DeviceList';
import './DeviceDetails.css';
import { useAuth } from '../../../Utils/auth';

export default function DeviceDetails() {
    const { devices } = useAuth();
    const [showDeviceForm, setShowDeviceForm] = useState(false);
    const [newDevice, setNewDevice] = useState(false);
    const [deviceName, setDeviceName] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setDeviceName('');
        setShowDeviceForm(false);
    }, [devices]);

    const handleAddDeviceClick = (name) => {
        setDeviceName(name);
        setShowDeviceForm(true);
        setNewDevice(true);
    };

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
                    <AddDevice onAddDevice={handleAddDeviceClick} />
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
                        const { name, rssi } = device;
                        return <DeviceList name={name} rssi={rssi} key={index} />;
                    })}
                </ul>
            </div>
            {showDeviceForm && <DeviceForm deviceName={deviceName} isNew={newDevice} />}
        </>
    );
}
