import React, {ChangeEvent, useState} from 'react';
import {OSType, WishesType} from './App';

type WishListPropsType = {
    wishes: WishesType[]
    addWish: (newItem: string, newOs: OSType) => void
}

export const WishList = (props: WishListPropsType) => {
    const [newTitle, setNewTitle] = useState<string>('')
    const [newOs, setNewOs] = useState<OSType>('All')

    const addWishTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)
    const addNewItemHandler = () => {
        props.addWish(newTitle, newOs)
        setNewTitle('')
        setNewOs('All')
    }
    const changeOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setNewOs(e.currentTarget.value as OSType)
    }
    return (
        <div>
            <div>
                <input placeholder="Enter an item" value={newTitle} onChange={addWishTitleHandler}/>
                <select value={newOs} onChange={changeOSHandler}>
                    <option selected value="All">Select OS</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                </select>
                <button onClick={addNewItemHandler}>Add</button>
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

