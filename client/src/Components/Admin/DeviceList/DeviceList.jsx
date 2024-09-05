import { useAuth } from "../../../Utils/auth"

export default function DeviceList({ name, rssi }) {


    return (
        <>
            <li>
                <div className="profile">
                    <h5>{name}</h5>
                    <p>RSSI: {rssi}</p>
                </div>
                <span>Explore</span>
            </li>
        </>
    )
}
