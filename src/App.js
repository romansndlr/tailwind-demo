import React from "react"
import { PricingCard } from "./components"

const features = [
  "Est superbus guttus, cesaris.",
  "Sunt compateres amor dexter, magnum historiaes.",
  "Cum finis persuadere, omnes urbses visum lotus, castus musaes.",
  "Cum imber ire, omnes guttuses visum primus, dexter classises.",
  "Altus nutrix unus transferres fluctus est."
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container justify-center items-center p-6 flex flex-col lg:flex-row">
        <div className="w-full order-2 mt-6 lg:order-1 lg:w-1/4 lg:-mr-2 lg:mt-0">
          <PricingCard
            title="Hobby"
            price={79}
            features={features.slice(0, 3)}
          />
        </div>
        <div className="w-full order-1 lg:order-2 lg:w-1/3">
          <PricingCard title="Growth" price={149} popular features={features} />
        </div>
        <div className="mt-6 w-full order-3 lg:w-1/4 lg:-ml-2">
          <PricingCard
            title="Scale"
            price={349}
            features={features.slice(0, 3)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
