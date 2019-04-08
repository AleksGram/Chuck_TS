import * as React from 'react';
import  { IContextType } from '../store-service-contex/store-service-contex';
import { StoreServiceConsumer } from '../store-service-contex';

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export const withStoreService =() =>function<P extends {storeService?: IContextType}, R= Omit<P, "storeService">>(Wrapped: React.ComponentClass<P> | React.FC<P>): React.SFC<R> {
    return function BoundComponent (props: any){
        return (
            <StoreServiceConsumer>
                {storeService => {
                    return (
                        <Wrapped {...props} storeService={storeService} />
                    )
                }}
            </StoreServiceConsumer>
        )
    }
}

// const withStoreService = (Wrapped: React.ComponentClass<P> | React.FC<P>)=> <React.SFC<R>> {
//     return  (props: R) =>{
//         return (
//             <StoreServiceConsumer>
//                 {storeService => {
//                     return (
//                         <Wrapped {...props} storeService={storeService} />
//                     )
//                 }}
//             </StoreServiceConsumer>
//         )
//     }
// };
// export type Props = {};
// export type ServiceProp = {
//     storeService:ChackService
// }
// export interface Pr extends ServiceProp {

// }

// const withStoreService = () => (Wrapped: React.SFC<Props extends ServiceProp>) => {
   
//     return (props: any) => {
//         return (
//             <StoreServiceConsumer>
//                {
//                    (storeService) => {
//                         return (<Wrapped {...props} storeService={storeService} />)
//                    }
//                }
//             </StoreServiceConsumer>
//         )
//     }
// }


