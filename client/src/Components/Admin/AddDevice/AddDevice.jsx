import { Link } from 'react-router-dom';
import './AddDevice.css';

export default function AddDevice({ setIsNew }) {

    return (
        <>
            <div className="device__form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Add Device</label>
                        <input
                            type="text"
                            placeholder='Enter Device Name'
                        />
                    </div>
                    <Link>Add</Link>
                </form>
            </div>
        </>
    )
}
