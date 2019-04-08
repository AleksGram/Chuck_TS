import * as React from 'react';
import {Component} from 'react';
import {ErrorIndicator} from '../error-indicator/error-indicator';



interface IErrorState {
    hasError: boolean
}

export default class ErrorBoundry extends Component<object, IErrorState> {

    state = {
        hasError: false
    }

    componentDidCatch () {
        this.setState({hasError: true})
    }
    render () {
        if (this.state.hasError) {
            return <ErrorIndicator/>;
        } else {
            return this.props.children;
        }
    }
}