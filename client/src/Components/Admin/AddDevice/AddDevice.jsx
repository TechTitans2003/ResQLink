import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddDevice.css';

export default function AddDevice({ onAddDevice }) {

    const navigate = useNavigate();

    const [deviceName, setDeviceName] = useState('');

    const handleInputChange = (e) => {
        setDeviceName(e.target.value);
    };

    const handleAddClick = () => {
        if (deviceName) {
            navigate(`/admin/user/device-details/list/new/${deviceName}`)
        }
    };

    return (
        <div className="device__form">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label htmlFor="name">Add Device</label>
                    <input
                        type="text"
                        placeholder='Enter Device Name'
                        value={deviceName}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="button" className='button' onClick={handleAddClick}>
                    Add
                </button>
            </form>
        </div>
    );
}
