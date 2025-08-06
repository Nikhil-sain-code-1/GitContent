import React, { useEffect, useState } from 'react'

const LocalStr = () => {
  var [obj, setObj] = useState(
    {
      Name: '',
      Phone: '',
      Address: ''
    })


  var [EditIndex, setEditIndex] = useState(null)


  var [arr, setArr] = useState(() => {
    const sorted = localStorage.getItem('first')
    if (sorted) {
      return JSON.parse(sorted)
    }
    else {
      return []
    }

  })
  function set(e) {
    setObj({ ...obj, [e.target.name]: e.target.value });

  }
  function save() {
    if (obj.Name == '' || obj.Phone == '' || obj.Address == '') {
      alert('Please Fill all the values')
      return
    }
    if (isNaN(obj.Phone)) {
      alert("Please enter phone number in correct format")
      return
    }

    setArr([...arr, obj])
  }
  useEffect(() => {

    localStorage.setItem('first', JSON.stringify(arr))
  }, [arr])


  function Dlt(index) {

    var newArr = arr.filter((obj, pos) => {
      return pos != index
    })
    setArr(newArr)

  }

  function edit(index) {

    // console.log(arr[index])  

    const x = arr[index].Name
    const y = arr[index].Phone
    const z = arr[index].Address

    setObj(
      {
        Name: x,
        Phone: y,
        Address: z
      }
    )

    setEditIndex(index)

  }


  function update() {

    if (EditIndex == null) {
      alert('No item is select for Update')
      return
    }

    if (obj.Name == '' || obj.Phone == '' || obj.Address == '') {
      alert('Please Fill all the values')
      return
    }

    if (isNaN(obj.Phone)) {
      alert("Please enter phone number in correct format")
      return
    }
  
    let updateArr=[...arr]
    updateArr[EditIndex] = obj
    setArr(updateArr)
    setObj({ Name: "", Phone: "", Address: "" })
    setEditIndex(null)
    
  }
  return (
    <div>
      <input value={obj.Name} onChange={set} name='Name' placeholder='Enter Your Name' type="text" id="" /> <br />
      <input value={obj.Phone} onChange={set} name='Phone' placeholder='Enter Your Phone' type="text" id="" /> <br />
      <input value={obj.Address} onChange={set} name='Address' placeholder='Enter Your Address' type="text" id="" /> <br />
      <button onClick={save}>Save</button>
      <button onClick={update}>Update</button>

      <br /><br />
      <table border={5}>
        <thead>
          <th>Name</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Operation</th>
        </thead>
        <tbody>
          {
            arr ? arr.map((obj, index) => {
              return (
                <tr>
                  <td>{obj.Name}</td>
                  <td>{obj.Phone}</td>
                  <td>{obj.Address}</td>
                  <td>
                    <button onClick={() => edit(index)}>Edit</button>
                    <button onClick={() => Dlt(index)}>Delete</button>
                  </td>

                </tr>
              )

            }) : ''
          }

        </tbody>
      </table>
    </div>
  )

}

export default LocalStr