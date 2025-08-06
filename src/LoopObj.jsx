import React from 'react'

const LoopObj = () => {
  var arr = {
    user1: {
      Name: "anirudh",
      Phone: 97893434,
      Address: "Rohtak"
    },
    user2: {
      Name: "Pulkit",
      Phone: 3253453,
      Address: "Delhi"
    },
    user3: {
      Name: "Punit",
      Phone: 2346456,
      Address: "Sirsa"
    },
    user4: {
      Name: "Rajat",
      Phone: 657567,
      Address: "Hisar"
    }
  }
  // arr.forEach((item) => {
  //   console.log(item);

  // })

  var keys = Object.keys(arr)
  keys.forEach((key) => {
    // console.log([key]);
    // console.log(arr[key]);
    console.log(arr[key].Name);
  
    

  })



  return (
    <div>

    </div>
  )
}

export default LoopObj