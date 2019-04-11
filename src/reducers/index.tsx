import * as React from 'react';
import {IState} from '../store/index';
import * as constants from '../constants';


const initialState:IState = {
    loading: true,
    jokeLoading: true,
    currentJoke: '',
    categories: [],
    categoryJoke: {value: ''},
    activeCategory: '',
}
const reducer = (state=initialState, action:any) => {
    switch(action.type){
        case constants.RND_JOKE:
        return {
            ...state,
            currentJoke: action.payload,
            loading: false,
            jokeLoading: false
        }
        case constants.JOKE_CATEGORY:
        return {
            ...state,
            categories: action.payload,
            loading: false
        }
        case constants.RND_CAT_JOKE:
        return {
            ...state,
            categoryJoke: action.payload,
            loading: false,
            jokeLoading: false,
            activeCategory: action.activeCategory
        }
        case constants.REQUEST_JOKE:
        return {
            ...state,
            jokeLoading: true,
            loading: true
        }
        case constants.CATEGORY_CHANGE:
        return {
            ...state,
            jokeLoading: true
        }
        default:
            return state;
    }
}

export default reducer;