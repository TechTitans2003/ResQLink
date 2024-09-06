import { Outlet } from 'react-router-dom';
import Insight from '../../Components/Admin/Insight/Insight';
import './UserAdmin.css';
import { useAuth } from '../../Utils/auth';

// Define a mapping for the insight types to icons
const iconMap = {
    devices: 'ri-device-fill',
    location: 'ri-focus-3-line',
    'active-devices': 'ri-user-2-fill',
};

const UserAdmin = () => {
    const { insight, devices } = useAuth();

    // Ensure insight is available
    const insightKeys = Object.keys(insight);
    const insightValues = Object.values(insight);

    if (!devices) {
        return <>Loading.....</>
    }

    return (
        <>
            <ul className="main__body__box-info">
                {insightKeys.map((key, index) => (
                    <Insight
                        key={index}
                        styleName={iconMap[key] || 'ri-question-line'}
                        value={insightValues[index]}
                        para={key.replace(/-/g, ' ').toUpperCase()}
                    />
                ))}
            </ul>
            <div className="main__body__data">
                <Outlet />
            </div>
        </>
    );
}

export default UserAdmin;
