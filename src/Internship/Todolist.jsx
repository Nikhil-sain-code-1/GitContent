import React, { useState } from 'react'

const Todolist = () => {
  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  function save() {

    if (task.trim() === '') return;
    if (editIndex !== null) {
      const updatedTodos = todos.map((item, index) => {
        return index === editIndex ? task : item
      })
      setTodos(updatedTodos)
      setEditIndex(null)
    } else {
      setTodos([...todos, task])
    }
    setTask('')

  }
  function dlt(index) {
    const newTodo = todos.filter((obj, pos) => {
      return pos != index
    })
    setTodos(newTodo)
  }
  function edit(index) {
    setTask(todos[index])
    setEditIndex(index)
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }} >
      <input onChange={(e) => setTask(e.target.value)} style={{ width: '200px' }} placeholder='Enter Here:' value={task} type="text" name="" id="" /> <br /><br />
      <button onClick={save}>{editIndex !== null ? 'Update' : 'Save'}</button>
      <br /><br />
      <table border={2} style={{ marginLeft: '600px' }} >
        <thead>
          <tr>
            <th>List</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((Item, index) => {
              return (
                <tr key={index} >
                  <td>{Item}</td>
                  <td><button onClick={() => dlt(index)} >Delete</button>
                    <button onClick={() => edit(index)} >Edit</button>
                  </td>

                </tr>
              )
            })
          }
        </tbody>
      </table>


    </div>

  )

}

export default Todolist