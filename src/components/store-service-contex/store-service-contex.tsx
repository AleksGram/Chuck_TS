import * as React from 'react';
import ChackService from './../../services/store-service';

export interface IContextType {
    
}

const {
    Provider: StoreServiceProvider,
    Consumer: StoreServiceConsumer
} = React.createContext<IContextType | null>(null);

export {
    StoreServiceProvider,
    StoreServiceConsumer
}

