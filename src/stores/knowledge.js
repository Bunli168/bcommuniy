import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useKnowledgeStore = defineStore('knowledge', () => {
  const questions = ref([
    {
      id: 1,
      title: 'How to handle state in Vue 3 using Pinia?',
      content: 'I am migrating an app from Vue 2 (Vuex) to Vue 3 (Pinia). What are the best practices for structuring my stores, especially for complex nested objects?',
      author: {
        name: 'Alex Developer',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
      },
      tags: ['vue', 'pinia', 'state-management'],
      upvotes: 42,
      answersCount: 5,
      createdAt: '2 hours ago',
      resolved: true
    },
    {
      id: 2,
      title: 'Best practices for securing a Firebase Web App?',
      content: 'Looking for a checklist on how to properly secure Firestore rules, Authentication, and App Check for a production-ready application.',
      author: {
        name: 'Sarah Coder',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      },
      tags: ['firebase', 'security', 'firestore'],
      upvotes: 15,
      answersCount: 2,
      createdAt: '1 day ago',
      resolved: false
    },
    {
      id: 3,
      title: 'Tailwind CSS vs Vanilla CSS for large scale apps?',
      content: 'Is it worth migrating a large, existing codebase from modular SCSS to Tailwind CSS? What have been your experiences regarding maintainability?',
      author: {
        name: 'Dev John',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      },
      tags: ['css', 'tailwind', 'architecture'],
      upvotes: 89,
      answersCount: 12,
      createdAt: '3 days ago',
      resolved: false
    }
  ])

  const articles = ref([
    {
      id: 1,
      title: 'Building Scalable Vue 3 Applications',
      excerpt: 'A comprehensive guide to structuring your Vue 3 projects for long-term maintainability, focusing on the Composition API and smart component design.',
      content: 'Full content goes here...',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      author: {
        name: 'Emily Tech',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      },
      readTime: '5 min read',
      tags: ['vue', 'architecture', 'frontend'],
      createdAt: 'Oct 24, 2023',
      likes: 124
    },
    {
      id: 2,
      title: 'Understanding Modern Authentication Flows',
      excerpt: 'Breaking down OAuth 2.0, OIDC, and JWTs in a way that actually makes sense for frontend developers.',
      content: 'Full content goes here...',
      coverImage: 'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800',
      author: {
        name: 'Michael Security',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      },
      readTime: '8 min read',
      tags: ['auth', 'security', 'oauth'],
      createdAt: 'Oct 20, 2023',
      likes: 85
    }
  ])

  function addQuestion(question) {
    questions.value.unshift({
      ...question,
      id: Date.now(),
      upvotes: 0,
      answersCount: 0,
      createdAt: 'Just now',
      resolved: false
    })
  }

  return { questions, articles, addQuestion }
})
