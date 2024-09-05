import './DeviceForm.css';

export default function DeviceForm() {


    return (
        <>
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
                                    value="device name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rssiValue">RSSI Value</label>
                                <input
                                    type="text"
                                    placeholder="RSSI Value"
                                    value="rssi value"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="latitude">Latitude</label>
                                <input
                                    type="text"
                                    placeholder="Latitude"
                                    value="latitude"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="longitude">Longitude</label>
                                <input
                                    type="text"
                                    placeholder="Longitude"
                                    value="longitude"
                                />
                            </div>

                            {/* User Details */}
                            <div className="form-group">
                                <label htmlFor="userName">User Name</label>
                                <input
                                    type="text"
                                    placeholder="User Name"
                                    value="user name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value="email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    value="phone"
                                />
                            </div>

                            {/* Form Buttons */}
                            <div className="form-button">

                                <button>Add Device</button>
                                <button>Update Info</button>
                                <button>Delete Device</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
