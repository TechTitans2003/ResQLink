import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './DeviceForm.css';
import { useAuth } from '../../../Utils/auth';

export default function DeviceForm() {
    const { condition, deviceName } = useParams();
    const { API, token } = useAuth();
    const navigate = useNavigate();

    const [isNew, setIsNew] = useState(true);

    // State to hold form data
    const [formData, setFormData] = useState({
        deviceName: '',
        rssiValue: '',
        latitude: '',
        longitude: '',
        userName: '',
        email: '',
        phone: ''
    });

    // Fetch data from backend if editing an existing device
    const getDeviceInfo = async () => {
        if (condition !== 'new') {
            setIsNew(false);
            try {
                const response = await fetch(`${API}/api/device/${deviceName}/info`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    }
                });

                const resData = await response.json(); // Await the JSON response
                if (response.ok) {
                    const device = resData.device;
                    // const user = resData.user;

                    // Populate the form data with fetched values
                    setFormData({
                        deviceName: device.name,
                        rssiValue: device.rssi,
                        latitude: device.latitude,
                        longitude: device.longitude,
                        userName: device.username,
                        email: device.email,
                        phone: device.phone,
                    });
                }
            } catch (error) {
                console.error('Error fetching device:', error);
            }
        }
    };

    // Only fetch device info when condition is not 'new'
    useEffect(() => {
        if (condition !== 'new') {
            getDeviceInfo();
        }
    }, [condition, deviceName]);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission for adding a new device
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const url = condition === 'new'
            ? `${API}/api/device/create`
            : `${API}/api/device/${deviceName}/update`;

        const method = condition === 'new' ? 'POST' : 'PUT';

        try {
            const response = await fetch(url, {
                method: method,
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                if (condition === 'new') {
                    alert('Device added successfully!');
                } else {
                    alert('Device updated successfully!');
                }
                navigate('/admin/user/dashboard'); // Navigate to dashboard after success
            } else {
                alert('Failed to save device.');
            }
        } catch (error) {
            console.error('Error saving device:', error);
            alert('An error occurred while saving the device.');
        }
    };

    // Dynamic button rendering based on condition
    const renderButtons = () => {
        if (condition === 'new') {
            return <button type="submit">Add Device</button>;
        } else {
            return (
                <>
                    <button type="submit">Update Info</button>
                    <button type="button">Delete Device</button>
                </>
            );
        }
    };

    useEffect(() => {
        setFormData({
            deviceName: deviceName,
            latitude: "",
            longitude: "",
            userName: "",
            email: "",
            phone: "",
        });
    }, [condition, deviceName])


    return (
        <div className="members device-display">
            <div>
                <div className="members__top">
                    <h4>Device and User Details</h4>
                    <div className="members__menu">
                        <i className="ph-dots-three-outline-vertical-fill"></i>
                        <ul className="menu">
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Remove</a></li>
                        </ul>
                    </div>
                </div>
                <div className="members__form">
                    <form onSubmit={handleFormSubmit}>
                        {/* Device Details */}
                        <div className="form-group">
                            <label htmlFor="deviceName">Device Name</label>
                            <input
                                type="text"
                                name="deviceName"
                                placeholder="Device Name"
                                value={formData.deviceName}
                                onChange={handleInputChange}
                                readOnly={condition !== 'new'}  // Allow editing only if new
                                required
                            />
                        </div>
                        {
                            (condition !== 'new')?
                            <div className="form-group">
                                <label htmlFor="rssiValue">RSSI Value</label>
                                <input
                                    type="text"
                                    name="rssiValue"
                                    placeholder="RSSI Value"
                                    value={formData.rssiValue}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>:
                            <></>
                        }
                        <div className="form-group">
                            <label htmlFor="latitude">Latitude</label>
                            <input
                                type="text"
                                name="latitude"
                                placeholder="Latitude"
                                value={formData.latitude}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitude">Longitude</label>
                            <input
                                type="text"
                                name="longitude"
                                placeholder="Longitude"
                                value={formData.longitude}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* User Details */}
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input
                                type="text"
                                name="userName"
                                placeholder="User Name"
                                value={formData.userName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        {/* Form Buttons */}
                        <div className="form-button">
                            {renderButtons()}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
