import React from "react"
import cx from "classnames"
import Check from "./Check"
import PropTypes from "prop-types"

PricingCard.propTypes = {
  features: PropTypes.array.isRequired,
  popular: PropTypes.bool,
  price: PropTypes.number,
  title: PropTypes.string.isRequired
}

function PricingCard({
  popular = false,
  features = [],
  title = "",
  price = 0
}) {
  return (
    <div
      className={cx(
        "flex flex-col bg-white rounded-lg shadow-lg w-full relative",
        {
          "border-2 border-indigo-600 z-10": popular
        }
      )}
    >
      {popular && (
        <div className="flex justify-center -mt-3">
          <span className="bg-indigo-600 rounded-full text-indigo-100 px-4 uppercase text-xs h-6 leading-6">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-8 flex flex-col items-center justify-center">
        <h3 className="text-gray-900 font-semibold text-2xl">{title}</h3>
        <p className="flex mt-2">
          <span className="self-start text-gray-900 text-2xl">$</span>
          <span className="font-bold text-6xl text-gray-900 leading-none ml-1">
            {price}
          </span>
          <span className="self-center text-gray-500 text-xl ml-2">/month</span>
        </p>
      </div>
      <div className="p-8 bg-gray-100 border-gray-200 border-t rounded-b-lg">
        <ul>
          {features.map(feature => (
            <li
              className="text-gray-600 mt-3 text-sm flex items-center"
              key={feature}
            >
              <Check />
              <span className="ml-2 truncate">{feature}</span>
            </li>
          ))}
        </ul>
        <button
          className={cx("btn", {
            "btn-primary": popular,
            "btn-default": !popular
          })}
        >
          Start your trial
        </button>
      </div>
    </div>
  )
}

export default PricingCard
