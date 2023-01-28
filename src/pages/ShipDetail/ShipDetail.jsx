import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
      <h3>Ship Details</h3>
      <h3>{starshipDetails.name}</h3>
      <h4>Model: { starshipDetails.model }</h4>
    </>
  )
}

export default ShipDetails;