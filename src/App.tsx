import React from 'react';
import './App.css';

function App() {
    const [wishes, setWishes] = useState([
        {id: 1, title: 'IPhone 13 ProMax', OS: 'iOS', price: 1200, category: 'Phones', checked: false},
        {id: 2, title: 'IPhone 14', OS: 'iOS', price: 1400, category: 'Phones', checked: false},
        {id: 3, title: 'Samsung Galaxy Fold 4', OS: 'Android', price: 1500, category: 'Phones', checked: false},
        {id: 4, title: 'Samsung Galaxy S23', OS: 'Android', price: 1300, category: 'Phones', checked: false},
        {id: 5, title: 'Xiaomi 13', OS: 'Android', price: 1000, category: 'Phones', checked: false},
        {id: 6, title: 'Huawei', OS: 'Android', price: 900, category: 'Phones', checked: false},
        {id: 7, title: 'Nokia 3310', OS: '-', price: 100, category: 'Phones', checked: false}
    ])
    return (
        <div className="App">

        </div>
    );
}

export default App;
