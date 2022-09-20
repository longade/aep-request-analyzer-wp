import "./ButtonWrap.scss";

const ButtonWrap = ({ title, to }) => {

    return (
        <div className='buttonWrap'>
            <a className='route' href={to} target='_blank' rel="noopener noreferrer">
                {title}
            </a>
        </div>
    );
}

export default ButtonWrap;