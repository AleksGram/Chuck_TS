import * as constants from '../constants';

const randomJoke = (joke:string) => {
    return {
        type: constants.RND_JOKE,
        payload: joke
    }
}

const jokeCategories = (categories:string[]) => {
    return {
        type: constants.JOKE_CATEGORY,
        payload: categories
    }
}

const rndCategoryJoke = (joke:string, category:string) => {
    return {
        type: constants.RND_CAT_JOKE,
        payload: joke,
        activeCategory: category
    }
}

const jokeRequest = () => {
    return {
        type: constants.REQUEST_JOKE
    }
}

const categoryChanged = () => {
    return {
        type: constants.CATEGORY_CHANGE
    }
}

export  {
    randomJoke,
    jokeCategories,
    rndCategoryJoke,
    jokeRequest,
    categoryChanged
};