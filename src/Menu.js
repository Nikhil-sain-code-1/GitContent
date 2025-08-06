import React from 'react'

const Menu = ({ Count }) => {
    return (
        <div>
            {
                Count.map((obj) => {
                    return (
                        <div id='box'>
                            <span><img src={obj.Path} alt="" id='img1' /></span>
                            <span>{obj.Name}</span> <br />
                            <span id='rs'> INR {obj.Price}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Menu