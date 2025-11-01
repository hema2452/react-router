import React from 'react'

const Form = () => {
  return (
    <div>
      <form action="">
        <input type="text" placeholder='Email' />
        <br />
        <input type="tel" placeholder='Number' />
        <br />
        <textarea placeholder='message' />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default Form
