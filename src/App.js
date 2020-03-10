import React from "react"
import PricingCard from "./PricingCard"
import faker from "faker"

function App() {
  return (
    <div className="bg-gray-200 min-h-screen p-6 flex">
      <div className="flex items-center justify-center container mx-auto flex-1">
        <div className="w-1/4">
          <PricingCard
            title="Hobby"
            price={79}
            features={Array.from({ length: 3 }, () => faker.lorem.sentence())}
          />
        </div>
        <div className="w-1/3">
          <PricingCard
            title="Growth"
            price={149}
            popular
            features={Array.from({ length: 5 }, () => faker.lorem.sentence())}
          />
        </div>
        <div className="w-1/4">
          <PricingCard
            title="Scale"
            price={349}
            features={Array.from({ length: 3 }, () => faker.lorem.sentence())}
          />
        </div>
      </div>
    </div>
  )
}

export default App
