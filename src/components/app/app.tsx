import React from 'react';
import { Route, Switch } from 'react-router-dom';
import  HomePage  from '../pages/homePage';
import './app.css';


type Props = any;
const App:React.FC<Props> = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
        </Switch>
    );
};

export default App;