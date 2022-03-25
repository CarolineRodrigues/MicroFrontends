import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, LinearProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return createStyles({
    bar: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  });
});

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      <LinearProgress />
    </div>
  );
};
