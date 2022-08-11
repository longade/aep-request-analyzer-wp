import "./SidebarLink.scss";
import { Link } from 'react-router-dom';

const SidebarLink = ({ title, to }) => {
    return (
        <Link className='link' to={to}>
            {title}
        </Link>
    );
}

export default SidebarLink;