import { createMuiTheme } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  palette: {
    background: {
      header: grey[400],
      default: grey[200],
      paper: grey[50],
    },
  },
});
