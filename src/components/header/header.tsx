import * as React from 'react';
import './header.css';
import icon from './chuck-min.png';

import JC from '../jokeCategories';

export interface IHeader {
   
}

// function Header (props:IHeader) {
//     const { title } = props;
//     return (
//         <div className="header">
//             <span>{title}</span>
//             <img src={icon} alt="icon"></img>
//         </div>
//     )
// }

// export default Header;

export const Header: React.FC<IHeader> = props => {
    return (
        <div className="header">
            <span></span>
            <img src={icon} alt="icon"></img>
        </div>
    )
}