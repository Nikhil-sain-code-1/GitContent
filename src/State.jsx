import React, { useState } from 'react'

const State = () => {
  var [obj, setObj] = useState()

  function set(e) {
    setObj({...obj,[e.target.name]:e.target.value});

  }
  return (
    <div>
      <input onKeyUp={set} type="text" name='Name' placeholder='Enter Your Name' nid="" /><br />
      <input onKeyUp={set} type="text" name='Phone' placeholder='Enter Your Phone' id="" /><br />
      <input onKeyUp={set} type="text" name='Address' placeholder='Enter Your Address' id="" /> <br /> <br />

    </div>
  )  
}

export default State







