import React /*, { useState, useEffect}*/ from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
//import Sidebar from './Sidebar';
import Footer from './Footer';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';
import Andrea from './Andrea.png'
//import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import {StickyContainer, Sticky } from 'react-sticky'

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Subscribe', url: '#' },
  { title: 'Quizzes', url: '/quizzes' },
  { title: 'Contact us', url: '#' },
  { title: 'About', url: '/about' },
];

const mainFeaturedPost = {
  title: 'Info Trivia is a website inspired by the shape most interview questions ',
  image: Andrea,
  imgText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Test 1',
    date: 'Today',
    description: 'Test 2 description',
    image: Andrea,
    imageText: 'Image Text',
  },
  {
    title: 'Test2',
    date: 'Today',
    description:
      'Test 2 description.',
    image: Andrea,
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <StickyContainer style={{ overflowY: 'auto' }}>
          <Sticky>
          {({
            sticky_style,
            isSticky,
            wasSticky,
            distanceFromTop,
            distanceFromBottom,
            calculatedHeight
          }) => (
            <Header title="Home" sections={sections} style={sticky_style} />
          )}
          </Sticky>
        </StickyContainer>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Main" posts={posts} />
            {/*
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
            />
            */}
          </Grid>
        </main>
      </Container>
      <Footer title="Footer"  social={sidebar.social} />
    </React.Fragment>
  );
}
