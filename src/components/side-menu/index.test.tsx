import { createMockRouter, renderWithRouter } from '@/utils/test-utils'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SideMenu from './index'

describe('<SideMenu />', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
    localStorage.clear()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders the menu items', () => {
    const { asFragment } = renderWithRouter(<SideMenu />)

    expect(asFragment()).toMatchSnapshot()
  })

  it('should open menu when click hamburger icon', async () => {
    const user = userEvent.setup()

    renderWithRouter(<SideMenu />)

    const menuIcon = screen.getByTestId('menu')

    await user.click(menuIcon)

    expect(screen.getByRole('button', { name: 'Log out' })).toBeInTheDocument()
  })

  it('should logout when click logout button', async () => {
    const user = userEvent.setup()
    const router = createMockRouter({ push: jest.fn() })
    const localStorageRemoveItemSpy = jest.spyOn(localStorage, 'removeItem')

    renderWithRouter(<SideMenu />, { router })

    const menuIcon = screen.getByTestId('menu')

    await user.click(menuIcon)

    const logoutButton = screen.getByRole('button', { name: 'Log out' })

    await user.click(logoutButton)

    expect(localStorageRemoveItemSpy).toBeCalledWith('loggedIn')
    expect(localStorageRemoveItemSpy).toBeCalledWith('guest')
    expect(router.push).toBeCalledWith('/login')
  })
})
