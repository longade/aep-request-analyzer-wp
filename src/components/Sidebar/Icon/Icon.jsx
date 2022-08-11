import "./Icon.scss";
import { FaTimes } from 'react-icons/fa';

const Icon = ({ toggle }) => {
    return (
        <div className='icon' onClick={toggle}>
            <FaTimes className='closeIcon' />
        </div>
    );
}

export default Icon;