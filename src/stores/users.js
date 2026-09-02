import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', () => {
  const users = ref([
    {
      id: 1,
      name: 'Anderson (Lead Engineer)',
      email: 'anderson@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anderson',
      role: 'Admin',
      joinDate: '2023-01-15T00:00:00Z',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Maria (Senior DevOps)',
      email: 'maria@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MariaDev',
      role: 'User',
      joinDate: '2023-04-20T00:00:00Z',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Alex (Junior Eng)',
      email: 'alex@example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexEng',
      role: 'User',
      joinDate: '2023-08-10T00:00:00Z',
      status: 'Active'
    }
  ])

  function addUser(userData) {
    const newUser = {
      id: Date.now(),
      name: userData.name,
      email: userData.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name.replace(/\s/g, '')}`,
      role: userData.role || 'User',
      joinDate: new Date().toISOString(),
      status: 'Active'
    }
    users.value.push(newUser)
  }

  function deleteUser(id) {
    const index = users.value.findIndex(u => u.id === id)
    if (index !== -1) {
      users.value.splice(index, 1)
    }
  }

  return { users, addUser, deleteUser }
})
