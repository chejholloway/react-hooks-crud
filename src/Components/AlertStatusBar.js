import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const AlertStatus = (props) => {
  const classes = useStyles();
  const {show, color, msg, handleAlert} = props
    
  return (
    <div className={classes.root}>
      <Collapse in={show}>
        <Alert
          color={color}
          onClose={handleAlert}
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
  );
}

export default AlertStatus;
