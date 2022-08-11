import HeroContent from '../Content/HeroContent';
import HeroItems from '../Items/HeroItems';
import useStyles from './styles';

export default function HeroContainer() {
    const classes = useStyles();

    return (
        <div className={classes.containerDiv}>
            <HeroContent>
                <HeroItems />
            </HeroContent>
        </div>
    );
}