import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref([
    {
      id: 1,
      author: {
        name: 'Anderson (Lead Engineer)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anderson',
        role: 'Teacher',
        skills: ['Architecture', 'Management'],
        reputation: 1540
      },
      content: 'Reminder for all new hires: the IT Onboarding documentation has been updated for this quarter. Make sure you check the internal wiki before your first day! 📚',
      tag: '#General',
      timestamp: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      likes: 42,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop',
      comments: [
        {
          id: 1,
          author: {
            name: 'Sam (Junior Dev)',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamDev',
            role: 'Beginner',
            reputation: 12
          },
          text: 'Thanks Anderson! Do we need to install any specific IDE beforehand?',
          timestamp: new Date(Date.now() - 1800000).toISOString(),
          isBestAnswer: false
        }
      ]
    },
    {
      id: 2,
      author: {
        name: 'Maria (Senior DevOps)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MariaDev',
        role: 'Senior',
        skills: ['AWS', 'Docker', 'Linux'],
        reputation: 890
      },
      content: 'Just wanted to share some experience with the junior devs! When troubleshooting production issues, don\'t just guess. Check the logs and metrics first. Let me know if you need help with the monitoring dashboard.',
      tag: '#Q&A',
      timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      likes: 115,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop',
      comments: []
    },
    {
      id: 25,
      author: {
        name: 'Sarah (Senior Dev)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Senior1',
        role: 'Senior',
        skills: ['Vue.js', 'Vite'],
        reputation: 1450
      },
      content: 'I just open-sourced my new Vue 3 dashboard template! It uses Vite, Pinia, and comes with some really sleek UI components. Let me know what you think or if you want to contribute!',
      projectUrl: 'https://github.com/sarahdev/vue3-awesome-dashboard',
      tag: '#General',
      timestamp: new Date(Date.now() - 3600000 * 10).toISOString(), // 10 hours ago
      likes: 245,
      image: null,
      comments: []
    },
    {
      id: 3,
      author: {
        name: 'David (Teacher)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher1',
        role: 'Teacher',
        skills: ['JavaScript', 'Vue.js'],
        reputation: 3200
      },
      content: 'Here is a simple example of how to use a computed property in Vue 3 with the Composition API. Notice how it automatically updates when the reactive dependencies change!',
      codeSnippet: `import { ref, computed } from 'vue'\n\nconst count = ref(0)\nconst doubleCount = computed(() => count.value * 2)`,
      codeLanguage: 'javascript',
      tag: '#Software',
      timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
      likes: 87,
      comments: [
        {
          id: 1,
          author: {
            name: 'Alex (Junior Eng)',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexEng',
            role: 'Beginner',
            reputation: 45
          },
          text: 'Wow, this is much cleaner than the Options API. Thanks!',
          timestamp: new Date(Date.now() - 160000000).toISOString(),
          isBestAnswer: false
        }
      ],
      isSolved: false,
      isQuestion: false
    },
    {
      id: 4,
      author: {
        name: 'John (Student)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnStd',
        role: 'Beginner',
        skills: ['Python'],
        reputation: 5
      },
      content: 'Hey everyone, I am getting a syntax error in Python when trying to loop through a list. Can someone tell me what is wrong with my code?',
      codeSnippet: `my_list = [1, 2, 3]\nfor i in my_list\n    print(i)`,
      codeLanguage: 'python',
      tag: '#Q&A',
      timestamp: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
      likes: 12,
      isQuestion: true,
      isSolved: true,
      comments: [
        {
          id: 1,
          author: {
            name: 'Sarah (Senior Dev)',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Senior1',
            role: 'Senior',
            reputation: 1450
          },
          text: 'You forgot the colon at the end of the for loop!',
          codeSnippet: `my_list = [1, 2, 3]\nfor i in my_list:\n    print(i)`,
          codeLanguage: 'python',
          timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
          isBestAnswer: true
        }
      ]
    },
    {
      id: 5,
      author: {
        name: 'Sok (IT Admin)',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SokIT',
        role: 'Senior',
        skills: ['Networking', 'Hardware'],
        reputation: 670
      },
      content: 'We are upgrading the main router in the lab tomorrow at 10 AM. Expect some network downtime for about 30 minutes. Please save your work locally.',
      tag: '#Hardware',
      timestamp: new Date(Date.now() - 3600000 * 24 * 3).toISOString(), // 3 days ago
      likes: 34,
      comments: []
    }
  ])

  const currentUser = ref({
    name: 'Alex (Junior Eng)',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexEng',
    bio: 'Junior Engineer. Looking forward to learning modern tech stacks and joining internal hackathons!',
    role: 'Beginner',
    skills: ['Vue.js', 'JavaScript'],
    reputation: 45,
    isAdmin: true // Setting to true for admin dashboard testing
  })

  const getPostById = computed(() => {
    return (id) => posts.value.find((post) => post.id === id)
  })

  function addPost(content, tag = '#General', codeSnippet = null, codeLanguage = 'javascript', isQuestion = false, imageUrl = null, projectUrl = null) {
    const finalTag = isQuestion ? '#Q&A' : tag
    const newPost = {
      id: Date.now(),
      author: currentUser.value,
      content,
      codeSnippet,
      codeLanguage,
      image: imageUrl,
      projectUrl,
      tag: finalTag,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
      isSolved: false,
      isQuestion
    }
    posts.value.unshift(newPost)
  }

  function addComment(postId, text, parentId = null, codeSnippet = null, codeLanguage = 'javascript') {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.comments.push({
        id: Date.now(),
        parentId,
        author: {
          name: currentUser.value.name,
          avatar: currentUser.value.avatar,
          role: currentUser.value.role,
          reputation: currentUser.value.reputation
        },
        text,
        codeSnippet,
        codeLanguage,
        timestamp: new Date().toISOString(),
        isBestAnswer: false
      })
    }
  }

  function likePost(postId) {
    const post = posts.value.find(p => p.id === postId)
    if (post) {
      post.likes++
    }
  }

  function updateProfile(name, bio, role, skills) {
    currentUser.value.name = name
    currentUser.value.bio = bio
    currentUser.value.role = role
    currentUser.value.skills = skills
    
    // Also update existing posts by this user (simulating cascade update)
    posts.value.forEach(post => {
      if (post.author.avatar === currentUser.value.avatar) {
        post.author.name = name
        post.author.role = role
      }
    })
  }

  function markAsSolved(postId, commentId) {
    const post = posts.value.find(p => p.id === postId)
    if (post && post.author.name === currentUser.value.name) {
      post.isSolved = true
      post.comments.forEach(c => {
        if (c.id === commentId) {
          c.isBestAnswer = true
          // In a real app, this would trigger an API call to increase the author's reputation
          console.log(`Awarded reputation to ${c.author.name}`)
        } else {
          c.isBestAnswer = false
        }
      })
    }
  }

  return { posts, currentUser, getPostById, addPost, addComment, likePost, updateProfile, markAsSolved }
})
