import React from 'react';
import Texto from './Texto.js';
import Aside from './Aside.js';
import Explorador from './Explorador.js';
//import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//src\components\Home\Explorador.js

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1, 
    position: 'relative',
  },
  explorador: {
    height: '100%',
    marginLeft: theme.spacing(8), 
    textAlign: 'flex-start',
    position: 'fixed',
  },
    texto: {
    marginLeft: '10%',  
    textAlign: 'justify',
    border:'blue',
  },
  aside: {
    height: '100%', 
    marginLeft: theme.spacing(2), 
    textAlign: 'justify',
    position: 'fixed',
    
  }

}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs="2">
          <Grid className={classes.explorador}>
            <Explorador/>
          </Grid>
        </Grid>
        <Grid item xs="6">
          <Grid className={classes.texto}>
            <Texto/>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid className={classes.aside}>
            <Aside/>
          </Grid>
        </Grid>
      </Grid> 

    </div>

  );
}