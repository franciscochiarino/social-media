import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '15px',
    minWidth: '80px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default StyledButton;