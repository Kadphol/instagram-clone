export const validateEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/
  if (email.length === 0) {
    return 'Email is required'
  } else if (!regex.test(email)) {
    return 'Please use a valid email address!'
  } else if (email.length > 30) {
    return 'Email address cannot exceed more than 30 characters'
  }

  return ''
}

export const validatePassword = (password: string) => {
  const regexLetters = /^(?=.*[a-z])(?=.*[A-Z])/
  const regexNumbers = /^(?=.*[0-9])/

  if (password.length === 0) {
    return 'Password is required'
  } else if (!regexLetters.test(password)) {
    return 'Password must contain at least one lowercase and uppercase letter'
  } else if (!regexNumbers.test(password)) {
    return 'Password must contain at least one number'
  } else if (password.length < 8) {
    return 'Password be must be eight characters or longer'
  }

  return ''
}
