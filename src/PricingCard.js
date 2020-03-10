import PropTypes from "prop-types"
import React from "react"
import Check from "./Check"
import classNames from "classnames"

PricingCard.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  popular: PropTypes.bool,
  price: PropTypes.number,
  title: PropTypes.string.isRequired
}

function PricingCard({ features = [], popular = false, title, price = 0 }) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>
          <span>$</span>
          <span>{price}</span>
          <span>/month</span>
        </p>
      </div>
      <div>
        <ul>
          {features.map(feature => (
            <li key={feature}>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button>Start your trial</button>
      </div>
    </div>
  )
}

export default PricingCard
