import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../styles/index.scss';
import "./app.scss";
import { counterAction } from '../store/counter/actions';

interface counterOptions {
    nbr: number
}

interface stateOptions {
    counter: counterOptions
}

const App = () => {
    const dispatch = useDispatch();
    const { nbr } = useSelector((state: stateOptions) => state.counter)
    console.log(nbr);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        dispatch(counterAction());
    }

    return (<div className="App">
        <h1>Modele React avec TypeScript et Redux !</h1>
        <button className="button" onClick={handleClick}>{nbr}</button>
    </div>
    )
};

export default App;