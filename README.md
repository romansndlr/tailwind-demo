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
import PropTypes from "prop-types"
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
    <div
      className={classNames("bg-white rounded-lg shadow-lg relative", {
        "border-2 border-indigo-600": popular
      })}
    >
      {popular && (
        <div className="absolute inset-x-0 flex justify-center -mt-3">
          <span className="bg-indigo-600 rounded-full px-3 text-indigo-100 text-xs leading-6 uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}
      <div className="p-8 flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="flex items-center">
          <span className="text-2xl self-start mr-1 text-gray-900">$</span>
          <span className="text-5xl font-bold leading-none text-gray-900">
            {price}
          </span>
          <span className="text-gray-500 ml-1">/month</span>
        </p>
      </div>
      <div className="p-8 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <ul>
          {features.map(feature => (
            <li className="flex items-center mt-3" key={feature}>
              <Check />
              <span className="ml-2 truncate text-gray-600 text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={classNames("btn", {
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
import PricingCard from "./PricingCard"
import faker from "faker"

function App() {
  return (
    <div className="bg-gray-200 min-h-screen p-6 flex">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center container mx-auto flex-1">
        <div className="lg:w-1/4 lg:-mr-2 mt-6 order-2 lg:order-1">
          <PricingCard
            title="Hobby"
            price={79}
            features={Array.from({ length: 3 }, () => faker.lorem.sentence())}
          />
        </div>
        <div className="lg:w-1/3 z-10 order-1 lg:order-2">
          <PricingCard
            title="Growth"
            price={149}
            popular
            features={Array.from({ length: 5 }, () => faker.lorem.sentence())}
          />
        </div>
        <div className="lg:w-1/4 lg:-ml-2 mt-6 order-3">
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
```

Extract button component

```css
.btn {
  @apply mt-8 w-full py-3 rounded-lg shadow;
}

.btn-default {
  @apply bg-white text-indigo-600;
}

.btn-primary {
  @apply bg-indigo-600 text-white;
}
```
