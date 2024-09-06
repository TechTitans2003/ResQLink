import { Link } from "react-router-dom"
import { useAuth } from "../../../Utils/auth"

export default function DeviceList({ name, rssi, id }) {

    return (
        <>
            <li>
                <div className="profile">
                    <h5>RSSI: {rssi}</h5>
                    <p>{name}</p>
                </div>
                <Link to={`/admin/user/device-details/list/explore/${id}`}>Explore</Link>
            </li>
        </>
    )
}
