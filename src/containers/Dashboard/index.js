import { useState, useEffect } from "react"

import { makeUnified } from "utils"

import DashboardComponent from "components/Dashboard"

const DashboardContainer = () => {
  const [lpTokenSupply] = useState(470000000)

  const [fundRaised, setFundRaised] = useState(0)
  const [bnbPrice, setBnbPrice] = useState(0)
  const [tokenSold, setTokenSold] = useState(0)

  useEffect(() => {
    setFundRaised(9000000)
    setBnbPrice(420)
    setTokenSold(340000000)
  }, [])

  return (
    <DashboardComponent
      fundRaised={makeUnified(fundRaised)}
      tokenPrice={fundRaised / lpTokenSupply}
      bnbRaised={fundRaised / bnbPrice}
      tokenSold={makeUnified(tokenSold)}
      icoPercent={(tokenSold / lpTokenSupply) * 100}
    />
  )
}

export default DashboardContainer
