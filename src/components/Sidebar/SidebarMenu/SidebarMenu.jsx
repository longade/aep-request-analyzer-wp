import "./SidebarMenu.scss";

const SidebarMenu = ({ children }) => {
    return (
        <div className='menu'>
            {children}
        </div>
    );
}

export default SidebarMenu;