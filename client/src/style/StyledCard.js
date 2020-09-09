import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const StyledCard = withStyles({
  root: {
    maxWidth: 600,
    margin: "1.5rem auto",
    borderRadius: "15px",
    boxShadow: "0px 1px 2px 0px rgba(209,209,209,0.75)"
  },
  content: {
    padding: '0.5rem 1rem',
  }
})(Card);

export default StyledCard;