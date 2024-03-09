import React, {useState} from 'react';
import './App.css';
import {OsTypeForSelect, WishList} from './WishList';
import {v1} from 'uuid';


type OsType = 'All' | OsTypeForSelect
export type WishesType = {
    id: string
    title: string
    OS: OsType
    checked: boolean
}

function App() {
    const [wishes, setWishes] = useState<WishesType[]>([
        {id: v1(), title: 'IPhone 13 ProMax', OS: 'iOS', checked: true},
        {id: v1(), title: 'IPhone 14', OS: 'iOS', checked: true},
        {id: v1(), title: 'Samsung Galaxy Fold 4', OS: 'Android', checked: true},
        {id: v1(), title: 'Samsung Galaxy S23', OS: 'Android', checked: false},
        {id: v1(), title: 'Xiaomi 13', OS: 'Android', checked: false},
        {id: v1(), title: 'Huawei', OS: 'Android', checked: false}
    ])
    const [newTitle, setNewTitle] = useState<string>('')

    const addWish = (os: OsTypeForSelect) => {
        setWishes([{id: v1(), title: newTitle, OS: os, checked: false}, ...wishes])
    }

    // const addWish = (newItem: string, newOs: OSType) => {
    //     const newWish: WishesType = {id: v1(), title: newItem, OS: newOs, checked: false}
    //     setWishes([newWish, ...wishes])
    // }

    const removeWish = (id: string) => setWishes(wishes.filter(el => el.id !== id))

    return (
        <div className="App">
            <WishList wishes={wishes} setNewTitle={setNewTitle} newTitle={newTitle} addWish={addWish} removeWish={removeWish}/>
        </div>
    );
}

export default App;
