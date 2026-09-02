import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    members: [
      { id: 1, name: 'Alex Johnson', avatar: 'https://i.pravatar.cc/150?u=alex' },
      { id: 2, name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?u=maria' },
      { id: 3, name: 'James Smith', avatar: 'https://i.pravatar.cc/150?u=james' },
      { id: 4, name: 'Sarah Lee', avatar: 'https://i.pravatar.cc/150?u=sarah' },
    ],
    tasks: [
      {
        id: 101,
        title: 'Design Hero Banner',
        description: 'Create a new 3D illustration for the homepage hero section.',
        assigneeId: 1,
        status: 'done',
        createdAt: new Date().toISOString()
      },
      {
        id: 102,
        title: 'Fix Navigation Bug',
        description: 'The mobile menu doesn\'t close when clicking a link.',
        assigneeId: 2,
        status: 'in-progress',
        createdAt: new Date().toISOString()
      },
      {
        id: 103,
        title: 'Update Firebase Rules',
        description: 'Secure the Firestore database for the new collections.',
        assigneeId: 3,
        status: 'todo',
        createdAt: new Date().toISOString()
      }
    ]
  }),
  actions: {
    addTask(taskData) {
      const newTask = {
        id: Date.now(),
        ...taskData,
        createdAt: new Date().toISOString()
      }
      this.tasks.push(newTask)
    },
    updateTaskStatus(taskId, newStatus) {
      const task = this.tasks.find(t => t.id === taskId)
      if (task) {
        task.status = newStatus
      }
    }
  }
})
