import * as React from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

import withStoreService from '../hoc'
// const JokeCategories = require('../jokeCategories');
import JokeCategories from '../jokeCategories';
import './jokeHolder.css';

import { IState } from '../../store/index';
import ChuckService from '../../services/store-service';


export interface IJokeHolderProps {
    storeService: ChuckService,
    randomJoke: (joke: string) => { type: string, payload: string },
    jokeRequest: () => { type: string }
    rndCategoryJoke: (joke: string, category: string) => { type: string, payload: string, activeCategory: string }
    categoryChanged: () => { type: string }

}

type Props = IState & IJokeHolderProps;

class JokeHolder extends React.Component<Props, IState> {

    componentDidMount() {
        // eslint-disable-next-line
        const { storeService, randomJoke, jokeRequest } = this.props;
        jokeRequest();
        // eslint-disable-next-line
        const currentjoke = storeService.getRandomJoke()
            .then((data) => randomJoke(data.value))
    }

    renderJoke() {
        const { categoryJoke, currentJoke } = this.props;
        return (categoryJoke.value !== '') ? categoryJoke.value : currentJoke;
        // return currentJoke
    }

    randomBtnClick() {
        const { activeCategory, storeService, rndCategoryJoke, randomJoke, jokeRequest, categoryChanged } = this.props;
        if (activeCategory) {
            // jokeRequest();
            categoryChanged();
            // eslint-disable-next-line
            const jokeData = storeService.getCategoryRndJoke(activeCategory)
                .then((data) => rndCategoryJoke(data, activeCategory));
        } else {
            categoryChanged();
            // eslint-disable-next-line
            const currentjoke = storeService.getRandomJoke()
                .then((data) => randomJoke(data.value))
        }
    }

    render() {
        // eslint-disable-next-line
        const { loading, jokeLoading } = this.props;
        if (jokeLoading) {
            return (
                <div>
                    <div className='jokeContainer'>
                        <p className="current-joke">
                            <Loader />
                        </p>
                    </div>
                    <JokeCategories />
                    <div
                        className="btn btn-warning random"
                        onClick={() => { this.randomBtnClick() }}
                    >Random</div>
                </div>
            )
        }

        return (
            <div >
                <div className='jokeContainer'>
                    <p className="current-joke">
                        {this.renderJoke()}
                    </p>
                </div>
                <JokeCategories />
                <div
                    className="btn btn-warning random"
                    onClick={() => { this.randomBtnClick() }}
                >Random</div>
            </div>
        )
    }
}

const mapStateToProps = ({ currentJoke, loading, categoryJoke, activeCategory, jokeLoading }: IState) => {
    return {
        currentJoke,
        loading,
        categoryJoke,
        activeCategory,
        jokeLoading
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        jokeRequest: () => dispatch(actions.jokeRequest()),
        randomJoke: (joke: string) => dispatch(actions.randomJoke(joke)),
        rndCategoryJoke: (joke: string, category: string) => dispatch(actions.rndCategoryJoke(joke, category)),
        categoryChanged: () => dispatch(actions.categoryChanged())
    }
}

export default compose<React.ComponentClass>(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(JokeHolder)