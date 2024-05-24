import React from 'react'

const App = () => {
  const name = 'John'
  const names = ['John', 'Mary', 'Louis']
  const loggedIn = true
  const styles = {
    color: 'red',
    fontSize: '55px'
  }

  return (
    <>
      <div className='text-5xl'>App</div>
      <p style={styles}>Hello {name} </p>
      <ul>
        {names.map((name,index)=> {
          return <li key={index}>{name} welkom</li>
}) }
      </ul>
      {loggedIn && <h1>Hello Member</h1>}
    </>
  )
}

export default App