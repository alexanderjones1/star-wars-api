import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'

const ShipList = () => {
  const [ starShipList, setStarShipList ] = useState([])

  useEffect(() => {
    const fetchStarShipList = async () => {
      const shipData = await getAllStarships()
      setStarShipList(shipData.results)
    }
    fetchStarShipList()
  }, [])

  return(
    <>
      <h3>Starships!</h3>
      {starShipList.length ?
        <>
          {starShipList.map(starShip =>
            <div key={starShip.name}>
              <Link to='/starships' state={{starShip}}>{starShip.name}</Link>
            </div>  
          )}
        </>
        :
        <>
          <h4>Loading ships...</h4>
        </>
      }
    </>
  )
}

export default ShipList

// import { useState, useEffect } from "react"
// import { getAllStarships } from "../../services/sw-api"
// import { Link } from "react-router-dom"

// const ShipList = () => {
//   const [starShipList, setStarShipList] = useState([])
//   useEffect(()=> {
//     const fetchStarShipList = async () => {
//       const shipData = await getAllStarships()
//       setStarShipList(shipData.results)
//     }
//     fetchStarShipList()
//   }, [])
  
//   return (
//     <main>
//       <>
//         <h1>Ship List</h1>
//         {starShipList.length ?
        
//         {starShipList.map(starShip =>
//           <div key={starShip.index}>
//             <Link to='/starships' state={{starShip}}>{starShip.name}</Link>
//           </div>
//         )}
//       </>
//     </main>
//   )
// }

// export default ShipList