const delay = 1000

let id = 1
const users = [{ id: id, password: '111111', email: 'ar5@ya.ru' }]

export const login = async ({ email, password }) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      )
      if (user) {
        res({ userId: user.id })
      } else {
        rej('Invalid email or password')
      }
    }, delay)
  )
}
export const register = async ({ email, password }) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      )

      if (!user) {
        users.push({ id: ++id, email, password })
        res({ userId: id })
      } else {
        rej('User already registered')
      }
    }, delay)
  )
}
export const checkLogin = async (userId) => {
  return new Promise((res, rej) =>
    setTimeout(() => {
      const user = users.find((u) => u.id === userId)
      if (user) {
        res({ userId: id })
      } else {
        rej('User not found')
      }
    }, delay)
  )
}
