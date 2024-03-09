import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {WishesType} from './App';

type WishListPropsType = {
    wishes: WishesType[]
    // addWish: (newItem: string, newOs: OSType) => void
    setNewTitle: (newTitle: string) => void
    newTitle: string
    addWish: (os: OsTypeForSelect) => void
    removeWish: (id: string) => void
}
export type OsTypeForSelect = 'Select OS' | 'Android' | 'iOS'

export const WishList = (props: WishListPropsType) => {
    // const [newTitle, setNewTitle] = useState<string>('')
    const [os, setOs] = useState<OsTypeForSelect>('Select OS')
    //
    // const addWishTitleHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)
    // const addNewItemHandler = () => {
    //     props.addWish(newTitle, newOs)
    //     setNewTitle('')
    //     setNewOs('All')
    // }
    // const changeOSHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    //     setNewOs(e.currentTarget.value as OSType)
    // }
    const [error, setError] = useState<boolean>(false)
    const onSetNewWishTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        props.setNewTitle(e.currentTarget.value)
    }
    const addWishHandler = () => {
        if (os !== 'Select OS' && props.newTitle.trim() !== '') {
            props.addWish(os)
            props.setNewTitle('')
            setOs('Select OS')
        } else {
            setError(true)
        }
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addWishHandler()
    const onChangeOsHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        error && setError(false)
        setOs(e.currentTarget.value as OsTypeForSelect)
    }
    const removeWishHandler = (id: string) => props.removeWish(id)
    return (
        <div>
            <h1>Phones</h1>
            <div>
                <input placeholder="Enter an title" value={props.newTitle} onChange={onSetNewWishTitleHandler}
                       onKeyDown={onKeyDownHandler}/>
                <select value={os} onChange={onChangeOsHandler}>
                    <option value="Select OS">Select OS</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                </select>
                <button onClick={addWishHandler}>Add</button>
            </div>
            {error && <p style={{color: 'red'}}>Fields title and os are required!</p>}
            <ul>
                {props.wishes.map(el => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.checked}/>
                            <span>{el.title}</span>
                            <span> / OS: </span>
                            <span>{el.OS}</span>
                            <button onClick={() => removeWishHandler(el.id)}>x</button>
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

