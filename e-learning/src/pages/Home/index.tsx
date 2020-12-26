import React from 'react';
import {
  Typography,
  Grid,
  Container,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@material-ui/core';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AccessAlarmOutlinedIcon from '@material-ui/icons/AccessAlarmOutlined';

import useStyles from './useStyles';
import './_homepage.scss';

function HomePage() {
  const classes = useStyles();
  const cardItem = [
    {
      title: '60+ UX courses',
      content: 'The automated process all your website tasks.',
      icon: 1,
    },
    {
      title: 'Expert instructors',
      content: 'The automated process all your website tasks.',
      icon: 2,
    },
    {
      title: 'Life time access',
      content: 'The automated process all your website tasks.',
      icon: 3,
    },
  ];

  return (
    <Grid>
      <Grid className='home-page'>
        <Container>
          <Grid item xs={12} sm={12} md={6} className={classes.root}>
            <Grid>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Online Elearning platform
              </Typography>
              <Typography
                variant='body2'
                component='p'
                className={classes.content}
              >
                Build skills with courses, certificates, and degrees online from
                world-class universities and companies.
                <br />
              </Typography>
            </Grid>
            <Grid className={classes.learnMore}>
              <Button size='small' className={classes.btn}>
                Learn More
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Container>
        <Grid className={classes.cardList}>
          {cardItem.map((item) => {
            const { title, content, icon } = item;
            return (
              <Card className={classes.card} key={icon}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.titleCard}
                    color='textSecondary'
                    gutterBottom
                  >
                    {title}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {content}
                  </Typography>
                </CardContent>
                <CardMedia className={classes.imgCard}>
                  {icon === 1 ? (
                    <VideoLibraryOutlinedIcon className={classes.iconCard} />
                  ) : (
                    <>
                      {icon === 2 ? (
                        <PeopleAltOutlinedIcon className={classes.iconCard} />
                      ) : (
                        <AccessAlarmOutlinedIcon className={classes.iconCard} />
                      )}
                    </>
                  )}
                </CardMedia>
              </Card>
            );
          })}
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomePage;
