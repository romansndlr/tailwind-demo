Add tailwind as a postcss plugin

```javascript
const { override, addPostcssPlugins } = require("customize-cra")

module.exports = override(addPostcssPlugins([require("tailwindcss")]))
```

Icon component for check mark

```javascript
import React from "react"

export default function Check() {
  return (
    <svg
      className="text-green-500 w-5 h-5 flex-shrink-0"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}
```

Final Pricing card

```javascript
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
```

Final App.js

```javascript
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
```

Extract button component

```css
.btn {
  @apply mt-8 text-lg text-center w-full p-2 rounded-md shadow-md h-12;
}

.btn-default {
  @apply text-indigo-600 bg-white;
}

.btn-primary {
  @apply bg-indigo-600 text-indigo-100;
}
```
