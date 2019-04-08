import * as React from 'react';
import './jokeItem.css';

import { compose } from 'redux';
import withStoreService from '../hoc';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ChuckService from '../../services/store-service';
import { IState } from '../../store/index';



export interface IJokeItemProps {
    category: string,
    storeService: ChuckService,
    rndCategoryJoke: (joke: string, category: string) => IRndJokeAct,
    categoryChanged: ()=>{type:string}

}

export interface IRndJokeAct {
    type: string,
    payload: string,
    activeCategory: string
}

type Props = IState & IJokeItemProps;
type State = IState;

class JokeItem extends React.Component<Props, IState> {
    constructor(props:Props){
        super(props)
        this.categoryClick = this.categoryClick.bind(this);
    }
     categoryClick:(e:React.MouseEvent)=>void = (e: React.MouseEvent) => {
        const {category, storeService, rndCategoryJoke, categoryChanged}=this.props;
        // eslint-disable-next-line
        categoryChanged();
        const res = storeService.getCategoryRndJoke(category)
            .then((data) => rndCategoryJoke(data, category))
    }


    render() {
        const { category } = this.props;
        return (
            <span
            onClick={this.categoryClick}
            >{category}
            </span>
        )
    }
}

// const JokeItem: React.FC<Props> = (props) => {
//     const { category, storeService, rndCategoryJoke } = props;
// debugger
//     const categoryClick = (e: React.MouseEvent) => {
//         // eslint-disable-next-line
//         const res = storeService.getCategoryRndJoke(category)
//             .then((data) => rndCategoryJoke(data, category))
//     }
//     return (
//         <span
//             onClick={categoryClick}
//         >
//             {category}</span>
//     )
// }

const mapStateToProps = ({ currentJoke, loading, categoryJoke, activeCategory }: IState) => {
    return {
        currentJoke,
        loading,
        categoryJoke,
        activeCategory,
    }
}

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
    return {
        rndCategoryJoke: (joke: string, category: string) => dispatch(actions.rndCategoryJoke(joke, category)),
        categoryChanged: ()=>dispatch(actions.categoryChanged())
    }
}



export default compose(
    // withStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(JokeItem);