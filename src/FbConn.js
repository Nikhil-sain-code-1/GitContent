import React, { useEffect, useState } from 'react'
import fireDb from './Fire'
function Reg() {
    // var [name, setName] = useState("")
    // var [phone, setPhone] = useState("")
    // var [address, setAddress] = useState("")

    var [record, setRecord] = useState({})
    var [obj, setObj] = useState({
        Name: "",
        Phone: "",
        Address: ""
    })

    var [arr, setArr] = useState(JSON.parse(localStorage.getItem("first")))
    function set1(e) {

        setObj({ ...obj, [e.target.name]: e.target.value })
    }

    function submit() {
        fireDb.child("student").push(obj, function (err) {
            if (err)
                alert(err)
            else
                alert("Data Save successfully")
        })
    }

    function save() {

        if (obj.Name == "" || obj.Phone == "" || obj.Address == "") {
            alert("Plz enter the value")
            return
        }
        if (isNaN(obj.Phone)) {
            alert("Plz enter the phone in correct format")
        }
        setArr([...arr, obj])

    }
    useEffect(function () {
        if (arr == null) {
            setArr([])
        }
        localStorage.setItem("first", JSON.stringify(arr))
    }, [arr])

    function clear() {
        localStorage.clear()
        setArr([])
    }

    function del(index) {
        var newArr = arr.filter(function (obj, pos) {
            return pos != index
        })
        setArr(newArr)
    }

    function edit(index) {
        var x = arr[index].Name
        var y = arr[index].Phone
        var z = arr[index].Address

        setObj({
            Name: x,
            Phone: y,
            Address: z
        })
    }

    function show() {
        fireDb.child('student').on("value", function (snapshot) {
            var student = snapshot.val()
            setRecord(student)
            // var keys=Object.keys(student)
            // keys.forEach(function(key){
            //   console.log(student[key])
            // })
        })
    }
    function delet(key) {
        fireDb.child(student / $`{ key }`).remove(function (err) {
            if (err)
                alert(err)
            else
                alert("Data Deleted")
        })
        show()
    }
    return (
        <div>
            <input value={obj.Name} name="Name" onChange={set1} type="text" placeholder='Enter Name:' /> <br />
            <input value={obj.Phone} name="Phone" onChange={set1} type="text" placeholder='Enter Phone:' /> <br />
            <input value={obj.Address} name="Address" onChange={set1} type="text" placeholder='Enter Address:' /> <br />

            <button onClick={submit}>save</button>
            <button onClick={clear}>clear</button>
            <button onClick={show}>Show</button>
            <button>Update</button>
            <br />
            <table border={2}>
                <thead>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {
                        Object.keys(record).map(function (key) {
                            return (
                                <tr>
                                    <td>{record[key].Name}</td>
                                    <td>{record[key].Phone}</td>
                                    <td>{record[key].Address}</td>
                                    <td>
                                        <button onClick={() => delet(key)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* {
          arr ?  arr.map(function(obj,index){
              return(
                <tr>
                    <td>{obj.Name}</td>
                    <td>{obj.Phone}</td>
                    <td>{obj.Address}</td>
                    <td>
                       <button onClick={()=>del(index)}>Delete</button>
                       <button onClick={()=>edit(index)}>Edit</button>

                    </td>
                </tr>
              )
            }) :""
          } */}
                </tbody>
            </table>
        </div>

    )
}

export default Reg
