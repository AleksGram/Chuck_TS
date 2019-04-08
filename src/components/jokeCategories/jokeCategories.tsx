// import React, { Component } from 'react';
import * as React from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import withStoreService from '../hoc';
import './jokeCategories.css';
import JokeItem from '../jokeItem';
import ChuckService from '../../services/store-service';
import { IState } from '../../store/index';



export interface IJokeCatProps {
    storeService: ChuckService,
    jokeCategories: (categories: string[]) => { type: string, payload: string[] },
    activeCategory?: string,

}

type Props = IJokeCatProps & IState;

class JokeCategories extends React.Component<Props, IState> {

    componentDidMount() {
        const { storeService, jokeCategories } = this.props;
        // eslint-disable-next-line
        const categories = storeService.getJokeCategories()
            .then((data) => jokeCategories(data))
    }


    render() {
        // eslint-disable-next-line
        const { categories, loading, activeCategory, storeService } = this.props;
        debugger
        if (loading) {
            return (
                <div className='categoryContainer' >
                    <ul className="list-category">
                        <Loader />
                    </ul>
                    <div
                        // onClick={this.scroll} 
                        className='more-btn'>More-></div>
                </div>
            )
        }

        return (
            <div className='categoryContainer' >
                <ul className="list-category">
                    {
                        categories.map((cat, id) => {
                            return (
                                <li key={id} className={(activeCategory === cat) ? `category ${cat} active` : `category ${cat}`}>
                                    <JokeItem
                                        category={cat}
                                        categories={categories}
                                        storeService={storeService}
                                    ></JokeItem>
                                </li>
                            )
                        })
                    }
                </ul>
                <div
                    // onClick={this.scroll} 
                    className='more-btn'>More-></div>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, loading, activeCategory }: IState) => {
    return {
        categories,
        loading,
        activeCategory
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        jokeCategories: (categories: string[]) => dispatch(actions.jokeCategories(categories))
    }
}

export default compose<React.ComponentClass>(
    withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(JokeCategories)