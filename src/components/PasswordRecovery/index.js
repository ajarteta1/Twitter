import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(12),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '50vh', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function PasswordRecovery() {
  const classes = useStyles();

  return (
    <Grid component="main" className={classes.root}>
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Encuentra tu cuenta de Twitter
          </Typography>

        Ingresa tu correo electrónico, número de teléfono o nombre de usuario.
          <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usuario"
            name="usuario"
            autoFocus
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
            <Link href="/home"style={{ textDecoration: 'none' ,color:"white"}}>
              Submit
            </Link>
          </Button>
        </form>
      </div>
    </Grid>

  );
}
