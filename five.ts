enum userRole {
  Admin = 'admin',
  Teacher = 'teacher',
  Student = 'student'
}

interface User {
  id: number,
  name: string,
  role: userRole
}

function get(role: userRole, users: User[]): User[] {
  return users.filter(user=>user.role === role)
}

let users: User[] = [
  {id: 1, name: "Era", role: userRole.Admin},
  {id: 2, name: "Arlan", role: userRole.Student},
  {id: 3, name: "Ernur", role: userRole.Teacher},
]

function add(name: string, role: userRole): void{
  users.push({id: (users.length+1), name: name, role: role})
}

add('Maksat', userRole.Admin)
console.log(get(userRole.Admin, users))


/*
[
  { id: 1, name: 'Era', role: 'admin' },
  { id: 4, name: 'Maksat', role: 'admin' }
]
*/
