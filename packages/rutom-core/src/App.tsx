import React, { useState } from 'react'

import { ButtonCore } from './lib'

const App = () => {
  const [state, setState] = useState<unknown>(null)

  console.log('state', state)

  return (
    <ButtonCore
      onClick={() => setState(Math.random())}
      onKeyDown={() => 'Key down'}
      onFocus={() => console.log('El focus')}
      onBlur={() => console.log('lost focus')}
    >
      Hello
    </ButtonCore>
  )
}

export default App
