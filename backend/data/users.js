import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('project', 10),
    isAdmin: true,
  },
  {
    name: 'shubham gupta ',
    email: 'shubham@attainu.com',
    password: bcrypt.hashSync('project', 10),
  },
  {
    name: 'vineet kumar',
    email: 'vineet@attainu.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
