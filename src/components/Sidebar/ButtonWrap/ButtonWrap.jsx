import "./ButtonWrap.scss";
import { Link } from "react-router-dom";

const ButtonWrap = ({ title, to }) => {

    return (
        <div className='buttonWrap'>
            <Link className='route' to={to}>
                {title}
            </Link>
        </div>
    );
}

export default ButtonWrap;