import { useState } from 'react';
import AddDevice from '../AddDevice/AddDevice';
import DeviceForm from '../DeviceForm/DeviceForm';
import DeviceList from '../DeviceList/DeviceList';
import './DeviceDetails.css';

export default function DeviceDetails() {

    const [isNew, setIsNew] = useState(false);

    return (
        <>
            <div className="members">
                <div className="members__top">
                    <h4>Device List</h4>
                </div>
                <div className="device-box">
                    <AddDevice setIsNew={setIsNew} />
                    <div className="search-device">
                        <label htmlFor="search">Search Device</label>
                        <input
                            name='search'
                            type="text"
                            placeholder='Search Device'
                        />
                        <button>Search</button>
                    </div>
                </div>
                <ul className="members__user">
                    <DeviceList isNew={isNew} />
                </ul>
            </div>
            <DeviceForm />
        </>
    )
}
