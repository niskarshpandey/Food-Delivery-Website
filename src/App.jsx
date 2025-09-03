// import { useState } from 'react'
// import Home from './Pages/Home';




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Home/>
     
//     </div>
//   )
// }

// export default App


import React from 'react'
import Home from './Pages/Home'
import UserContext from './Context/UserContext'


function App() {
  return (
    <UserContext>
      
      <Home />
    </UserContext>
  )
}

export default App
