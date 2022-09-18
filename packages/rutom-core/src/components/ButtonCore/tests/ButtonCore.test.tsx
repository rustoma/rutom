import { render } from '@testing-library/react'
import React from 'react'

import { ButtonCore } from '@/components'

describe('Button', () => {
  test('render the button component', () => {
    render(<ButtonCore />)
  })
})
