import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1877F2'
    },
    secondary: {
      main:'#E4E6EB',
      dark: '#95979c'
    },
  },
  typography: {
    h1: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.5rem',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1rem',
      lineHeight: '1.2',
      fontWeight: '600',
    }
  }
});

export default Theme;