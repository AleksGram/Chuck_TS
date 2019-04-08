import { createStore } from 'redux';
import reducer from '../reducers';

export interface IState {
        loading: boolean,
        currentJoke: string,
        categories: string[],
        categoryJoke: {value:string},
        activeCategory: string,
}

const store = createStore(reducer);

export default store;