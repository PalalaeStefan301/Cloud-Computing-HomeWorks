import React, { useState, useRef, useEffect, Component } from 'react'
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from '../homepage/Header';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '77ch',
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '30ch',
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
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));

export default function Quizzes_teacher() {
    const classes = useStyles();

    const [age, setAge] = React.useState(0);
    var questionRefV = [];
    //const [questionRef, setQuestionRef] = React.useState(useRef(''));
    //const [answer1Ref, setAnswer1Ref] = React.useState(useRef(''));
    //const [answer2Ref, setAnswer2Ref] = React.useState(useRef(''));
    //const [answer3Ref, setAnswer3Ref] = React.useState(useRef(''));
    //const [answer4Ref, setAnswer4Ref] = React.useState(useRef(''));
    const questionRef = useRef('');
    const answer1Ref = useRef('');
    const answer2Ref = useRef('');
    const answercRef = useRef('');
    const answer3Ref = useRef('');
    const answer4Ref = useRef('');
    var q= "",a1="",a2="",a3="",a4="",ca="";
    const handleChange = (event) => {
        setAge(event.target.value);
        console.log(event.target.value);
    };
    const handleSend = (event) => {
        (async () => {
            const rawResponse = await fetch('https://europe-west1-cloud-2021-project-final.cloudfunctions.net/question', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "question_text": {q},
                    "answer_count": 4,
                    "answers": [
                        {a1},
                        {a2},
                        {a3},
                        {a4}
                    ],
                    "correct": {ca}
                })
            });
            const content = await rawResponse.json();

            console.log(content);
        })();
    };


    const handleQuestion = () => {
        q=questionRef.current.value
        return console.log(questionRef.current.value)
    };
    const handleAnswer1 = () => {
        a1=answer1Ref.current.value
        return console.log(answer1Ref.current.value)
    };
    const handleAnswer2 = () => {
        a2=answer2Ref.current.value
        return console.log(answer2Ref.current.value)
    };
    const handleAnswer3 = () => {
        a3=answer3Ref.current.value
        return console.log(answer3Ref.current.value)
    };
    const handleAnswer4 = () => {
        a4=answer4Ref.current.value
        return console.log(answer4Ref.current.value)
    };
    const handleAnswerC = () => {
        ca=answercRef.current.value
        return console.log(answercRef.current.value)
    };
    function Questions(props) {
        var elements = [];
        for (var i = 1; i <= age; i++) {
            elements.push(i);
        }
        return (
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {elements.map((element) => (
                        <div>
                            <Container className={classes.cardGrid} maxWidth="md">
                                <TextField
                                    id={String("Question " + element)}
                                    label={String("Question " + element)}
                                    style={{ margin: 8 }}
                                    placeholder="What CSS means?"
                                    fullWidth
                                    margin="normal"
                                    inputRef={questionRef}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <Button onClick={handleQuestion} size="small" color="primary">Set</Button>
                            </Container>
                            <TextField
                                label="Answer 1"
                                id={String("Answer1 " + element)}
                                className={classes.textField}
                                inputRef={answer1Ref}
                            />
                            <Button onClick={handleAnswer1} size="small" color="primary">Set</Button>
                            <TextField
                                label="Answer 2"
                                id={String("Answer2 " + element)}
                                className={classes.textField}
                                inputRef={answer2Ref}
                            />
                            <Button onClick={handleAnswer2} size="small" color="primary">Set</Button>
                            <TextField
                                label="Answer 3"
                                id={String("Answer3 " + element)}
                                className={classes.textField}
                                inputRef={answer3Ref}
                            />
                            <Button onClick={handleAnswer3} size="small" color="primary">Set</Button>
                            <TextField
                                label="Answer 4"
                                id={String("Answer4 " + element)}
                                className={classes.textField}
                                inputRef={answer4Ref}
                            />
                            <Button onClick={handleAnswer4} size="small" color="primary">Set</Button>
                            <TextField
                                label="Correct answer"
                                id="Correct answer"
                                className={classes.textField}
                                inputRef={answercRef}
                            />
                            <Button onClick={handleAnswerC} size="small" color="primary">Set</Button>
                        </div>
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
                    <Container className={classes.cardGrid} maxWidth="md">
                        <TextField
                            id={"QuizName"}
                            label={"QuizName"}
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            inputRef={questionRef}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Button onClick={handleQuestion} size="small" color="primary">Set</Button>
                    </Container>
                    <Container>
                        <div>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-helper-label">Questions</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={age}
                                    label="How many questions?"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>How many questions?</em>
                                    </MenuItem>
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={6}>6</MenuItem>
                                    <MenuItem value={7}>7</MenuItem>
                                    <MenuItem value={8}>8</MenuItem>
                                    <MenuItem value={9}>9</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={11}>11</MenuItem>
                                    <MenuItem value={12}>12</MenuItem>
                                    <MenuItem value={13}>13</MenuItem>
                                    <MenuItem value={14}>14</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                    <MenuItem value={16}>16</MenuItem>
                                    <MenuItem value={17}>17</MenuItem>
                                    <MenuItem value={18}>18</MenuItem>
                                    <MenuItem value={19}>19</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={21}>21</MenuItem>
                                    <MenuItem value={22}>22</MenuItem>
                                    <MenuItem value={23}>23</MenuItem>
                                    <MenuItem value={24}>24</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={26}>26</MenuItem>
                                    <MenuItem value={27}>27</MenuItem>
                                    <MenuItem value={28}>28</MenuItem>
                                    <MenuItem value={29}>29</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Container>
                    <Questions onChange={handleChange} />
                    <Container>
                        <Button onClick={handleSend} size="small" variant="contained" color="primary">Submit</Button>
                    </Container>
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