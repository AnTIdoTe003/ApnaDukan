import React, { useState } from 'react'

const NonUserDashboard = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="nonuser-wrapper">
        <div className="nonuser-container">
            <div className="nonuser-content">
              <h2>Redirecting you in 2s</h2>
            </div>
        </div>
    </div>
  )
}

export default NonUserDashboard
