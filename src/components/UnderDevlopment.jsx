import React from 'react'

const UnderDevlopment = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {/* Main Content */}
      <div className="text-center">
        {/* Animated Construction Emoji */}
        <div className="text-8xl mb-6 animate-bounce">🚧</div>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-4">Under Construction</h1>

        {/* Subheading */}
        <p className="text-lg text-gray-300 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        {/* Progress Bar */}
        <div className="flex items-center justify-center">
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mb-8 ">
          <div
            className="h-full bg-indigo-500 rounded-full animate-progress "
            style={{ width: "60%" }} // Adjust width for progress
          ></div>
        </div>
        </div>
       

        {/* Call-to-Action Buttons */}
        <div className="flex space-x-4 items-center justify-center">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Contribute
          </a>
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default UnderDevlopment