import { createMockRouter, renderWithRouter } from '@/utils/test-utils'
import HomePage from './index'

describe('HomePage', () => {
  it('should redirect to login page when user is not logged in', () => {
    const router = createMockRouter({ push: jest.fn() })
    renderWithRouter(<HomePage />, { router })

    expect(router.push).toBeCalledWith('/login')
  })
})
