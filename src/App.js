import React from "react"

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="container flex justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-1/3">
          <div className="p-8 flex flex-col items-center justify-center">
            <h3 className="text-gray-900 font-semibold text-2xl">Growth</h3>
            <p className="flex mt-2">
              <span className="self-start text-gray-900 text-2xl">$</span>
              <span className="font-bold text-5xl text-gray-900 leading-none ml-1">
                149
              </span>
              <span className="self-center text-gray-500 text-lg ml-2">
                /month
              </span>
            </p>
          </div>
          <div className="p-8 bg-gray-100 border-gray-200 border-t">
            <ul>
              <li className="text-gray-600 mt-3 text-sm flex items-center">
                <svg
                  className="text-green-500 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Cum cobaltum manducare, decores.</span>
              </li>
              <li className="text-gray-600 mt-3 text-sm flex items-center">
                <svg
                  className="text-green-500 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Superbus, fortis finiss tandem.</span>
              </li>
              <li className="text-gray-600 mt-3 text-sm flex items-center">
                <svg
                  className="text-green-500 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Cum xiphias studere, omnes.</span>
              </li>
              <li className="text-gray-600 mt-3 text-sm flex items-center">
                <svg
                  className="text-green-500 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Cum bubo resistere, omnes.</span>
              </li>
              <li className="text-gray-600 mt-3 text-sm flex items-center">
                <svg
                  className="text-green-500 w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="ml-2">Fatalis, gratis fluctuss.</span>
              </li>
            </ul>
            <button className="mt-8 bg-indigo-600 text-indigo-100 text-lg text-center w-full p-2 rounded">
              Start your trial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
