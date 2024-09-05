import { useAuth } from '../../../Utils/auth';
import './Insight.css';

export default function Insight(props) {

    const {styleName, value, para} = props;

    return (
        <>
            <li>
                <i className={styleName}></i>
                <h5>{value}</h5>
                <p>{para}</p>
            </li>
        </>
    )
}
