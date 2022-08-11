import "./NavBar.scss";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {

  return (
    <>
      <nav className='navMain'>
        <div className='divIcon'>
          <div style={{ width: 30, cursor: 'pointer' }} onClick={toggle}>
            <MenuIcon />
          </div>
        </div>
        <div className='divHomeLink'>
          <Link className='linkNav' to='/'>AEP</Link>
        </div>
      </nav>
    </>
  )
};

export default Navbar;
