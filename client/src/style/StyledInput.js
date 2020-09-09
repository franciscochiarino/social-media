import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const StyledInput = withStyles({
  root: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.9rem',
    borderRadius: '5px',
    width: '240px',
    background: '#fff',
    margin: '0.5rem',
    padding: '0.2rem 0.4rem',
  }
})(Input);

export default StyledInput;