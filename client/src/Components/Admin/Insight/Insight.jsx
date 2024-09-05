import './Insight.css';

export default function Insight() {
    return (
        <>
            <ul className="main__body__box-info">
                <li>
                    <i className="ri-device-fill"></i>
                    <h5>823</h5>
                    <p>Devices</p>
                </li>
                <li>
                    <i className="ri-focus-3-line"></i>
                    <h5>43</h5>
                    <p>Location</p>
                </li>
                <li>
                    <i className="ri-user-2-fill"></i>
                    <h5>455</h5>
                    <p>Active Members</p>
                </li>
            </ul>
        </>
    )
}
