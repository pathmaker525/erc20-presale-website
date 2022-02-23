import { useState, useEffect } from "react"

import { makeUnified } from "utils"

import DashboardComponent from "components/Dashboard"

const DashboardContainer = () => {
  const [icoTokenSupply] = useState(300000000)

  const [bnbRaised, setBnbRaised] = useState(0)
  const [bnbPrice, setBnbPrice] = useState(0)
  const [tokenSold, setTokenSold] = useState(0)

  useEffect(() => {
    setBnbRaised(100000)
    setBnbPrice(420)
    setTokenSold(100000000)
  }, [])

  return (
    <DashboardComponent
      fundRaised={makeUnified(bnbRaised * bnbPrice)}
      icoTokenSupply={makeUnified(icoTokenSupply)}
      bnbRaised={bnbRaised}
      tokenSold={makeUnified(tokenSold)}
      icoPercent={(tokenSold / icoTokenSupply) * 100}
    />
  )
}

export default DashboardContainer
