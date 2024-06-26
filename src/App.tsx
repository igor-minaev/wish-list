import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {WishList} from './WishList';

export type OsType = 'iOS' | 'Android' | '-'

export type WishesType = {
    id: string
    title: string
    price: number
    category: 'Phones'
    OS: OsType
    checked: boolean
}

function App() {
    const [wishes, setWishes] = useState<WishesType[]>([
        {id: v1(), title: 'IPhone 13 ProMax', price: 1200, category: 'Phones', OS: 'iOS', checked: true},
        {id: v1(), title: 'IPhone 14', price: 1400, category: 'Phones', OS: 'iOS', checked: true},
        {id: v1(), title: 'Samsung Galaxy Fold 4', price: 1500, category: 'Phones', OS: 'Android', checked: true},
        {id: v1(), title: 'Samsung Galaxy S23', price: 1300, category: 'Phones', OS: 'Android', checked: false},
        {id: v1(), title: 'Xiaomi 13', price: 1000, category: 'Phones', OS: 'Android', checked: false},
        {id: v1(), title: 'Huawei', price: 900, category: 'Phones', OS: 'Android', checked: false},
        {id: v1(), title: 'Nokia 3310', price: 100, category: 'Phones', OS: '-', checked: false}
    ])

    return (
        <div className="App">
            <WishList wishes={wishes}/>
        </div>
    );
}

export default App;
