import React from 'react';
import {WishesType} from './App';

type WishListPropsType = {
    wishes: WishesType[]
}

export const WishList = (props: WishListPropsType) => {
    return (
        <div>
            <div>
                <input placeholder='Enter an item'/>
                <select>
                    <option value="All">Select OS</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                </select>
                <button>Add</button>
            </div>
            <ul>
                {props.wishes.map(el => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.checked}/>
                            <span>{el.title}</span>
                            <span> / OS: </span>
                            <span>{el.OS}</span>
                            <button>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                FILTER BY:
                <div>
                    <select>
                        <option value="All">All</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

