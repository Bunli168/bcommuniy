import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useChatStore = defineStore('chat', () => {
  const activeChatId = ref(3) // Mary Franci is active by default
  
  const conversations = ref([
    {
      id: 1,
      name: 'Aspen Workman (Senior Java)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=1',
      lastMessage: 'Hello! I am looking for a new p...',
      time: '12:38',
      unread: 1,
      messages: []
    },
    {
      id: 2,
      name: 'Rhiel Madsen (Database Admin)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=2',
      lastMessage: 'Typing...',
      time: '12:38',
      unread: 2,
      messages: []
    },
    {
      id: 3,
      name: 'Mary Franci (UI/UX Instructor)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=3',
      lastMessage: 'Thanks. I will watch it later...',
      time: '12:38',
      unread: 0,
      messages: [
        { id: 1, senderId: 3, text: 'Can I try the software first?', time: '12:38', type: 'text' },
        { id: 2, senderId: 'me', text: 'Sure. Here is the demo unit. You can use it as long as you want.', time: '12:38', type: 'text', status: 'via SMS' },
        { id: 3, senderId: 3, text: 'Thank you. Now I want to buy the software. Which type of subscription do you have?', time: '12:38', type: 'text' },
        { id: 4, senderId: 'me', text: 'We have many type of subscription in this presentations. Please look at this showcase.', time: '12:38', type: 'text', status: 'via SMS', attachment: { name: 'Presentation.pdf', size: '234 mb' } },
        { id: 5, senderId: 3, text: 'Thanks. I will watch it later!', time: '12:38', type: 'text' },
      ]
    },
    {
      id: 4,
      name: 'Carla Dokidis (Junior Dev)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=4',
      lastMessage: 'It works for me! Thanks',
      time: '12:38',
      unread: 1,
      messages: []
    },
    {
      id: 5,
      name: 'Maria Vetrovs (Senior DevOps)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=5',
      lastMessage: 'Let\'s stay in touch!',
      time: '12:38',
      unread: 0,
      messages: []
    },
    {
      id: 6,
      name: 'Omar Vetrovs (Beginner)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=6',
      lastMessage: 'Voice message',
      time: '12:38',
      unread: 0,
      messages: []
    },
    {
      id: 7,
      name: 'Marcus Bergson (Teacher)',
      phone: '+ (1) 234-543-4321',
      avatar: 'https://i.pravatar.cc/150?u=7',
      lastMessage: 'Hello! I am looking for a new p...',
      time: '12:38',
      unread: 0,
      messages: []
    }
  ])

  const activeChat = computed(() => {
    return conversations.value.find(c => c.id === activeChatId.value)
  })

  function setActiveChat(id) {
    activeChatId.value = id
    // Clear unread if selected
    const chat = conversations.value.find(c => c.id === id)
    if (chat && chat.unread > 0) {
      chat.unread = 0
    }
  }

  function sendMessage(text) {
    const chat = activeChat.value
    if (chat && text.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      chat.messages.push({
        id: Date.now(),
        senderId: 'me',
        text: text.trim(),
        time,
        type: 'text',
        status: 'via SMS'
      })
      chat.lastMessage = text.trim()
      chat.time = time
    }
  }

  return {
    conversations,
    activeChatId,
    activeChat,
    setActiveChat,
    sendMessage
  }
})
