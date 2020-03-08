import React from "react"
import Check from "./Check"

function PricingCard(props) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/3">
      <div className="p-8 flex flex-col items-center justify-center">
        <h3 className="text-gray-900 font-semibold text-2xl">Growth</h3>
        <p className="flex mt-2">
          <span className="self-start text-gray-900 text-2xl">$</span>
          <span className="font-bold text-6xl text-gray-900 leading-none ml-1">
            149
          </span>
          <span className="self-center text-gray-500 text-xl ml-2">/month</span>
        </p>
      </div>
      <div className="p-8 bg-gray-100 border-gray-200 border-t">
        <ul>
          <li className="text-gray-600 mt-3 text-sm flex items-center">
            <Check />
            <span className="ml-2">Cum cobaltum manducare, decores.</span>
          </li>
          <li className="text-gray-600 mt-3 text-sm flex items-center">
            <Check />
            <span className="ml-2">Superbus, fortis finiss tandem.</span>
          </li>
          <li className="text-gray-600 mt-3 text-sm flex items-center">
            <Check />
            <span className="ml-2">Cum xiphias studere, omnes.</span>
          </li>
          <li className="text-gray-600 mt-3 text-sm flex items-center">
            <Check />
            <span className="ml-2">Cum bubo resistere, omnes.</span>
          </li>
          <li className="text-gray-600 mt-3 text-sm flex items-center">
            <Check />
            <span className="ml-2">Fatalis, gratis fluctuss.</span>
          </li>
        </ul>
        <button className="mt-8 bg-indigo-600 text-indigo-100 text-lg text-center w-full p-2 rounded">
          Start your trial
        </button>
      </div>
    </div>
  )
}

export default PricingCard
