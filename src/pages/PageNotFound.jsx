import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const changeDirection = useNavigate()
  return (
    <div>
      <h3>Page Not Found</h3>
      <button onClick={() => changeDirection("/")}>Back to Home</button>
    </div>
  )
}

export default PageNotFound
