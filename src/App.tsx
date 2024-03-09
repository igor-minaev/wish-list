import React, {useState} from 'react';
import './App.css';
import {WishList} from './WishList';
import {v1} from 'uuid';

export type OSType = 'iOS' | 'Android' | 'All'
export type WishesType = {
    id: string
    title: string
    OS: OSType
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
    const addWish = (newItem: string, newOs: OSType) => {
        const newWish: WishesType = {id: v1(), title: newItem, OS: newOs, checked: false}
        setWishes([newWish, ...wishes])
    }
    return (
        <div className="App">
            <WishList wishes={wishes} addWish={addWish}/>
        </div>
    );
}

export default App;
