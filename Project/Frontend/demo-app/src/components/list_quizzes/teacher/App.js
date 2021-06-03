import React, { useState, useEffect, Component } from 'react'
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Header from '../../homepage/Header';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const sections = [
  { title: 'Subscribe', url: '#' },
  { title: 'Quizzes', url: '/teacher' },
  { title: 'Contact us', url: '#' },
  { title: 'About', url: '/about' },
];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));
const URL = "https://europe-west1-cloud-2021-project-final.cloudfunctions.net/quiz/all";

export default function Quizzes_teacher() {
  const classes = useStyles();
  const UseEffectSecondArgument = () => {
    const [quizzes, setQuizzes] = useState([]);
    var lista = [];
    var lista2 = [];
    const getQuizzes = async () => {
      const response = await fetch(URL);
      const quizzess = await response.json();
      console.log(quizzess)

      for (const [id, value] of Object.entries(quizzess)) {
        lista2.push(`${value["question_count"]}`);
        lista.push(`${value["title"]}`);
      }
      lista = lista.map(function (x, it) { return { "title": x, "question_count": lista2[it] } });
      setQuizzes(lista);
    };

    useEffect(() => {
      getQuizzes();
    }, []);
    return (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {quizzes.map((quiz) => (
            <Grid item key={quiz["title"]} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://www.elearningworld.org/wp-content/uploads/2016/05/quiz-2192590_640.jpg"
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                  </Typography>
                  <Typography>
                    {`${quiz["title"]}`}
                    <Box p={1} bgcolor="background.paper">
                    </Box>
                    {`${quiz["question_count"]}`}
                    questions
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button component={RouterLink} to="/quiz" size="small" color="primary">
                    Start
                      </Button>
                  <Button size="small" color="primary">
                    Edit
                      </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Header title="Home" sections={sections} />
      <main>
        <div className="App">
          {/* <PostList /> */}
        </div>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Teacher
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Teacher description
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button href="/createQuiz" variant="contained" color="primary">
                    Create quiz
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <UseEffectSecondArgument />
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}