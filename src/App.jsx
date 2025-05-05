import React from 'react'
import './App.css'

function App() {
  const steps = [
    "Create React Application",
    "Set up GitHub Repository",
    "Install Jenkins",
    "Configure Jenkins Pipeline",
    "Set up Webhooks",
    "Deploy Application"
  ]

  return (
    <div className="container">
      <h1>Welcome to CI/CD Pipeline with Jenkins - modified</h1>
      <div className="steps-container">
        <h2>Implementation Steps:</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App