import React from "react"
import { PricingCard } from "./components"

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="container flex justify-center">
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  )
}

export default App
