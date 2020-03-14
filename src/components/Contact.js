import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';

import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '60em'
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.5rem',
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 0
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  }
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Grid container>
      <Grid item container direction="column" lg={3}>
        <Grid item>
          <Typography variant="h2" style={{ lineHeight: 1 }}>
            Contact Us
          </Typography>
          <Typography
            variant="body1"
            style={{ color: theme.palette.common.blue }}
          >
            We're waiting.
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img src={phoneIcon} alt="phone" style={{ marginRight: '0.5em' }} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
            >
              (555) 555-5555
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <img
              src={emailIcon}
              alt="envelope"
              style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}
            >
              john.doe@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Grid>
        </Grid>

        <Grid item>
          <TextField
            value={message}
            multiline
            rows={10}
            id="message"
            onChange={e => setMessage(e.target.value)}
          />
        </Grid>

        <Grid item>
          <Button variant="contained">
            Send Message
            <img src={airplane} alt="paper airplane" />
          </Button>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.background}
        alignItems="center"
        lg={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : 'inherit',
            padding: matchesSM ? 25 : 0
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: '1.5em' }}>
                Take advangtage of 21st century
              </Typography>
              <Grid container justify={matchesSM ? 'center' : undefined} item>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => props.setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimate}
            onClick={() => props.setValue(5)}
          >
            Free Esitmate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
