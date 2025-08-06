import React, { useEffect, useState } from 'react'

const LCLprc = () => {
  const [obj, setObj] = useState({
    Name: '',
    Phone: '',
    Address: ''
  })
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('first')))

  function clear() {
    localStorage.clear()
    setArr([])
  }

  function save() {
    if (obj.Name == "" || obj.Phone == "" || obj.Address == "") {
      alert("Plz enter the value") 
      return
    }
    if (isNaN(obj.Phone)) {
      alert("Plz enter the phone in correct format")
      return
    }
    setArr([...arr, obj])
  }

  function set(e) {
    // console.log(e);

    setObj({ ...obj, [e.target.name]: e.target.value })
  }

  function edit() {
    


  }
  function dlt(index) {
   var updated= arr.filter((obj, pos) => {
      return pos != index
    })
    setArr(updated)
  }
  useEffect(() => {
    if (arr == null) {
      setArr([])
    }
    localStorage.setItem('first', JSON.stringify(arr))
  }, [arr])
  return (
    <div>     
      <input onChange={set} name='Name' type="text" placeholder='Enter your Name' id="" /> <br />
      <input onChange={set} name='Phone' type="text" placeholder='Enter your Phone' id="" /><br />
      <input onChange={set} name='Address' type="text" placeholder='Enter your Address' id="" /><br />
      <button onClick={save} >Save</button>
      <button onClick={clear} >Clear</button>
      <br /><br />

      <table border={3}>
        <thead>
          <th>Name</th>
          <th>Phone</th>  
          <th>Address</th>
          <th>operation</th>
        </thead>
        <tbody>
          {
            arr.map((item, index) => {
              return (
                // console.log(item);
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Phone}</td>
                  <td>{item.Address}</td>
                  <td><button onClick={edit} >Edit</button>
                    <button onClick={() => dlt(index)} >Delete</button>
                  </td>
                </tr>
              )

            })}
        </tbody>
      </table>
    </div>
  )
}

export default LCLprc