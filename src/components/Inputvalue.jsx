import React, { useState } from 'react'

const Inputvalue = () => {
  const [value, setValue] = useState('TEXT IN INPUT')

  return (
    <div>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}

export default Inputvalue