import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#106cc8',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        marginTop: '12px',
        marginBottom: '12px'
      }
    },
    MuiContainer: {
      root: {
        marginTop: '32px'
      }
    },
    MuiFormControl: {
      root: {
        color: 'white',
        minWidth: 120,
        maxWidth: 300,
      },
    },
    MuiFormLabel: {
      root: {
        color: 'white',
      },
    },
    MuiInputLabel:{
      root: {
        color: 'white !important',
      }
    },
    MuiInput: {
      root: {
        color: 'white',
      },
      underline: {
        "&:before": {
          borderBottom: `1px solid white !important`
        }
      }
    }
  },


});

export default theme;
