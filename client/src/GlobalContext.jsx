// import React, { createContext } from 'react'
// import useAuthApi from './API/AuthApi'

// export const GlobalContext= createContext()

//  function DataProvider(props) {
//     let data ={
//        auth: useAuthApi()
//     }
//   return (
//     <GlobalContext.Provider value={data} >
//         {
//         props.children
//         }
//     </GlobalContext.Provider>
//   )
// }

// export default DataProvider


import React, { createContext } from 'react'
import useAuthApi from './API/AuthApi'

export const GlobalContext = createContext()

function DataProvider(props) {
  let data = {
      auth: useAuthApi()
  }
  return (
    <GlobalContext.Provider value={data}>
      {
        props.children
      }
    </GlobalContext.Provider>
  )
}

export default DataProvider
