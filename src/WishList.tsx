import React from 'react';
import {WishesType} from './App';

type WishListPropsType = {
    wishes: WishesType[]
}

export const WishList = (props: WishListPropsType) => {
    return (
        <div>
            <h1>{props.wishes[0].category}</h1>
            <ul>
                {props.wishes.map(el => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.checked}/>
                            <span>{el.title}</span>{` - ${el.OS} - ${el.price} `}
                            <button>x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

