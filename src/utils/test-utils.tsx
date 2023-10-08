import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { NextRouter } from 'next/router'

type DefaultParams = Parameters<typeof render>
type RenderUI = DefaultParams[0]
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> }

const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  forward: jest.fn(),
  isReady: false,
  isPreview: false,
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
}

export const createMockRouter = (router: Partial<NextRouter>): NextRouter => {
  return {
    basePath: '',
    pathname: '/',
    route: '/',
    query: {},
    asPath: '/',
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    forward: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: 'en',
    domainLocales: [],
    isPreview: false,
    ...router,
  }
}

/**  ref: https://wnassour.com/posts/test-router-in-nextjs
 * --------------------------------------------------
 *  Override the default test render with our own
 *
 *  You can override the router mock like this:
 *
 *  const { baseElement } = render(<MyComponent />, {
 *    router: { pathname: '/my-custom-pathname' },
 *  });
 * --------------------------------------------------
 */

export const renderWithRouter = (
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
) => {
  if (!wrapper) {
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    )
  }

  return render(ui, { wrapper, ...options })
}
