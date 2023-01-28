import { useEffect, useState } from "react"
import { getAllStarships } from "../../services/sw-api"
import { Link } from 'react-router-dom'
import ShipDetail from "../ShipDetail/ShipDetail"

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
      <div className="nav">
        <h1>STARSHIPS</h1>
      </div>
      <div id="ship-layout">
      {starShipList.length ?
        <>
          {starShipList.map(starShip =>
              <div className="ships" key={starShip.name}>
                <Link className="to-detail" to='/starships' state={{starShip}}>{starShip.name}</Link>
              </div>  
          )}
        </>
        :
        <>
          <h4>Loading ships...</h4>
        </>
      }
      </div>
    </>
  )
}

export default ShipList