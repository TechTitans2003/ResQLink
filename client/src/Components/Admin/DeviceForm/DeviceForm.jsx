import './DeviceForm.css';

export default function DeviceForm({ deviceName, isNew }) {
    return (
        <div className="members device-display">
            <div>
                <div className="members__top">
                    <h4>Device and User Details</h4>
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
                <div className="members__form">
                    <form>
                        {/* Device Details */}
                        <div className="form-group">
                            <label htmlFor="deviceName">Device Name</label>
                            <input
                                type="text"
                                placeholder="Device Name"
                                value={deviceName} // Display the device name
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="rssiValue">RSSI Value</label>
                            <input
                                type="text"
                                placeholder="RSSI Value"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                type="text"
                                placeholder="Latitude"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="text"
                                placeholder="Longitude"
                            />
                        </div>

                        {/* User Details */}
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input
                                type="text"
                                placeholder="User Name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                placeholder="Phone"
                            />
                        </div>

                        {/* Form Buttons */}
                        <div className="form-button">
                            {
                                (isNew) ?
                                    <button type="button">Add Device</button>
                                    :
                                    <>
                                        <button type="button">Update Info</button>
                                        <button type="button">Delete Device</button>
                                    </>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
