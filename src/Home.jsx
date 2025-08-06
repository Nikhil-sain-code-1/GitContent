import React, { useState } from 'react'
import Api from './Api'
import Menu from './Menu'
import Buttons from './Buttons'

const Home = () => {

    var [Count, setCount] = useState(Api)

    let allCat = Api.map(function (obj) {
        return obj.Catogery
    })
    const obj = new Set(allCat)
    allCat = [...obj];

    function set(item) {
        var filterList = Api.filter((obj) => obj.Catogery === item)
        setCount(filterList);

    }
    function All(Api) {
        setCount(Api)
    }
        
    return (
        <div>

            <Buttons set={set} allCat={allCat} />
            <button id='menu' onClick={() => All(Api)} >All Items</button>
            <br />

            <Menu Count={Count} />

        </div>
    )
}

export default Home