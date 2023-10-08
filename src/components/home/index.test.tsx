import { render } from '@testing-library/react'
import Home from '.'

describe('<Home/>', () => {
  it('should render the home page', () => {
    const { asFragment } = render(<Home />)

    expect(asFragment()).toMatchSnapshot()
  })
})
