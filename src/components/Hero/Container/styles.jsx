import { makeStyles } from "@mui/styles";
import ImgBg from '../../../images/open-source-bg.webp';

export default makeStyles(() => ({
    containerDiv: {
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(' + ImgBg + ')',
        height: '100vh',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    },
}));