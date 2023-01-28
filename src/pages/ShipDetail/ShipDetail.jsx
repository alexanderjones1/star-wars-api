import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getDetails } from '../../services/sw-api'

const ShipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const shipData = await getDetails(location.state.starShip.url)
      setStarshipDetails(shipData)
    }
    fetchDetails()
  }, [location.state.starShip.url])

  return ( 
    <>
      <div className="nav">
        <h1>Ship Details</h1>
      </div>
      <div id='card'>
      <div className="card-contents">
        <h3>Name:   {starshipDetails.name}</h3>
        <h4>Model:  { starshipDetails.model }</h4>
        <Link className='link' to={'/'}>RETURN</Link>
      </div>
      </div>
    </>
  )
}

export default ShipDetails;