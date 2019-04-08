import * as React from 'react';
// const JokeHolder = require('../jokeHolder');
import  JokeHolder from '../jokeHolder/jokeHolder';
import Loader from '../loader';
import Holder2 from '../../jokeHolder2';
type Props = any;

const HomePage:React.FC<Props> = () => {
    return (
        <JokeHolder />
    )
}

export default HomePage;