import React from 'react'

const Buttons = (props) => {
  // console.log(props.allCat)
  return (
    <div>
      <div id='menu' >
        {

          props.allCat.map((item) => {
            return (
              <button>{item}</button>
            )
          })

        }

      </div>
    </div>
  )
}

export default Buttons