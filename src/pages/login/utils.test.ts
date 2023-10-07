import { validateEmail, validatePassword } from './utils'

describe('validateEmail', () => {
  it('should return empty string for a valid email', () => {
    const validEmail = 'test@example.com'
    expect(validateEmail(validEmail)).toBe('')
  })

  it('should return string for an empty email', () => {
    const emptyEmail = ''
    expect(validateEmail(emptyEmail)).toBe('Email is required')
  })

  it('should return string for an invalid email', () => {
    const invalidEmail = 'invalidemail'
    expect(validateEmail(invalidEmail)).toBe(
      'Please use a valid email address!'
    )
  })

  it('should return string for an exceed limit email lenght', () => {
    const exceedLimitEmail = 'te12312ewlakjja@adsfadsfoaisfjlas.asdoifs'
    expect(validateEmail(exceedLimitEmail)).toBe(
      'Email address cannot exceed more than 30 characters'
    )
  })
})

describe('validatePassword', () => {
  it('should return empty string for a valid password', () => {
    const validPassword = 'Password123'
    expect(validatePassword(validPassword)).toBe('')
  })

  it('should return string for an empty password', () => {
    const emptyPassword = ''
    expect(validatePassword(emptyPassword)).toBe('Password is required')
  })

  it('should return string for no uppercase password', () => {
    const invalidPassword = 'shortpassword123'
    expect(validatePassword(invalidPassword)).toBe(
      'Password must contain at least one lowercase and uppercase letter'
    )
  })

  it('should return string for no lowercase password', () => {
    const invalidPassword = 'SHORTPASSWORD123'
    expect(validatePassword(invalidPassword)).toBe(
      'Password must contain at least one lowercase and uppercase letter'
    )
  })

  it('should return string for no number password', () => {
    const invalidPassword = 'Shortpassword'
    expect(validatePassword(invalidPassword)).toBe(
      'Password must contain at least one number'
    )
  })

  it('should return string for a short password', () => {
    const invalidPassword = 'Short1'
    expect(validatePassword(invalidPassword)).toBe(
      'Password be must be eight characters or longer'
    )
  })
})
