import "./ButtonWrap.scss";

const ButtonWrap = ({ title, to, icon }) => {

    return (
        <div className='buttonWrap'>
            <a className='route' href={to} target='_blank' rel="noopener noreferrer">
                {title}
                {" "}
                {icon}
            </a>
        </div>
    );
}

export default ButtonWrap;