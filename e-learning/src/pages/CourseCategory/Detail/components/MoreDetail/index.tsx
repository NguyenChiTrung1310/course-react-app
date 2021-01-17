import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import useStyles from '../../useStyles';

function MoreDetail() {
  const classes = useStyles();

  const firstData = [
    {
      content:
        'Become an advanced, confident, and modern JavaScript developer from scratch',
    },
    {
      content:
        'Become job-ready by understanding how JavaScript really works behind the scenes',
    },
    {
      content:
        'JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc.',
    },
    {
      content:
        'Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.',
    },
    {
      content:
        'Asynchronous JavaScript: Event loop, promises, async/await, AJAX calls and APIs',
    },
    {
      content:
        'Modern tools for 2020 and beyond: NPM, Parcel, Babel and ES6 modules',
    },
    {
      content: 'Get downloadable lectures and friendly support in the Q&A area',
    },
  ];

  const secondData = [
    {
      content:
        'Build 6 beautiful real-world projects for your portfolio (not boring toy apps)',
    },
    {
      content:
        'How to think and work like a developer: problem-solving, researching, workflows',
    },
    {
      content:
        'Modern ES6+ from the beginning: arrow functions, destructuring, spread operator, optional chaining (ES2020), etc.',
    },
    {
      content:
        'Complex concepts like the "this" keyword, higher-order functions, closures, etc.',
    },
    {
      content:
        'How to architect your code using flowcharts and common patterns',
    },
    {
      content:
        'Practice your skills with 50+ challenges and assignments (solutions included)',
    },
    {
      content:
        'Design your unique learning path according to your goals: course pathways',
    },
  ];

  return (
    <Paper elevation={3} className={`${classes.paper} ${classes.paperSecond}`}>
      <Grid item xs={12} sm={12} md={1} />
      <Grid item xs={12} sm={12} md={10}>
        <Grid item xs={12} sm={12} md={12} className={classes.learn}>
          <Typography gutterBottom variant='h5' className={classes.learnDetail}>
            What you'll learn
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} className={classes.learnDescription}>
          <Grid item xs={12} sm={12} md={6} style={{ padding: '0 10px' }}>
            {firstData.map((item, index) => (
              <Grid className={classes.item} key={index + 1}>
                <DoneAllIcon />
                <Typography gutterBottom>{item.content}</Typography>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6} style={{ padding: '0 10px' }}>
            {secondData.map((item, index) => (
              <Grid className={classes.item} key={index + 1}>
                <DoneAllIcon />
                <Typography gutterBottom>{item.content}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MoreDetail;
