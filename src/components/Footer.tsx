import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-secondary text-[14px]">
            © {new Date().getFullYear()} Karthikeya Thumma. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 