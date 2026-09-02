<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('Latest')
const searchQuery = ref('')

const questions = ref([
  {
    id: 1,
    title: 'How to implement authentication in Vue 3 using Pinia?',
    excerpt: 'I am trying to build a login system but I\'m not sure how to store the JWT token securely...',
    tags: ['vue.js', 'pinia', 'authentication'],
    author: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    time: '2 hours ago',
    votes: 6,
    answers: 0,
    views: 55
  },
  {
    id: 2,
    title: 'Best practices for organizing Tailwind CSS classes?',
    excerpt: 'My HTML is getting really cluttered with long lists of Tailwind classes. How do you all manage this in large projects?',
    tags: ['css', 'tailwind', 'frontend'],
    author: 'Sarah Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    time: '4 hours ago',
    votes: 21,
    answers: 3,
    views: 124
  },
  {
    id: 3,
    title: 'What is the difference between computed and watch in Vue 3?',
    excerpt: 'I am migrating from Vue 2 and still confused about when to use computed vs watch in the Composition API.',
    tags: ['vue.js', 'composition-api'],
    author: 'Mike Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    time: '1 day ago',
    votes: 15,
    answers: 0,
    views: 89
  },
  {
    id: 4,
    title: 'How to handle global errors in React?',
    excerpt: 'Is ErrorBoundary the only way to catch global errors in React? What about async errors inside useEffect?',
    tags: ['react', 'error-handling'],
    author: 'Emily Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
    time: '2 days ago',
    votes: 34,
    answers: 5,
    views: 256
  }
])

const filteredQuestions = computed(() => {
  let result = questions.value

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      item.title.toLowerCase().includes(q) || 
      item.excerpt.toLowerCase().includes(q)
    )
  }

  if (activeTab.value === 'Unanswered') {
    result = result.filter(item => item.answers === 0)
  } else if (activeTab.value === 'Top') {
    result = [...result].sort((a, b) => b.votes - a.votes)
  }

  return result
})
</script>

<template>
  <div class="qna-container animate-fade-in">
    <div class="header-section">
      <div>
        <h1 class="page-title">Q&A Forum</h1>
        <p class="text-muted">Ask questions, share code, and get help from the community.</p>
      </div>
      <button class="btn btn-primary">
        <svg viewBox="0 0 256 256" fill="currentColor" width="18" height="18" style="margin-right: 8px;">
          <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
        Ask Question
      </button>
    </div>

    <div class="filters glass-panel">
      <div class="tabs">
        <button 
          class="tab" 
          :class="{ active: activeTab === 'Latest' }"
          @click="activeTab = 'Latest'"
        >Latest</button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'Top' }"
          @click="activeTab = 'Top'"
        >Top</button>
        <button 
          class="tab" 
          :class="{ active: activeTab === 'Unanswered' }"
          @click="activeTab = 'Unanswered'"
        >Unanswered</button>
      </div>
      <div class="search-box">
        <input 
          v-model="searchQuery"
          type="text" 
          class="input-field search-input" 
          placeholder="Search questions..." 
        />
      </div>
    </div>

    <div class="question-list">
      <div v-if="filteredQuestions.length === 0" class="empty-state text-muted" style="text-align: center; padding: 3rem;">
        No questions found matching your criteria.
      </div>
      <div v-for="q in filteredQuestions" :key="q.id" class="question-card glass-panel">
        <div class="stats">
          <div class="stat-item">
            <span class="stat-value">{{ q.votes }}</span>
            <span class="stat-label">votes</span>
          </div>
          <div class="stat-item" :class="{ 'has-answers': q.answers > 0 }">
            <span class="stat-value">{{ q.answers }}</span>
            <span class="stat-label">answers</span>
          </div>
          <div class="stat-item text-muted">
            <span class="stat-value">{{ q.views }}</span>
            <span class="stat-label">views</span>
          </div>
        </div>
        
        <div class="content">
          <h3 class="question-title">
            <a href="#">{{ q.title }}</a>
          </h3>
          <p class="question-excerpt text-muted">
            {{ q.excerpt }}
          </p>
          <div class="tags">
            <span v-for="tag in q.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
          <div class="meta">
            <img :src="q.avatar" alt="avatar" class="author-avatar" />
            <span class="author-name">{{ q.author }}</span>
            <span class="post-time text-muted">asked {{ q.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.qna-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem 3rem;
}

.page-title {
  font-size: 2rem;
  color: #1a1a1a;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 2rem;
  border-radius: var(--radius-lg);
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tab {
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.tab:hover {
  background: rgba(255, 255, 255, 0.5);
  color: var(--text-primary);
}

.tab.active {
  background: white;
  color: var(--accent-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.search-box {
  width: 300px;
}

.search-input {
  padding: 0.5rem 1rem;
  border-radius: var(--radius-md);
}

.question-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.question-card {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--surface-hover-shadow);
}

.stats {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 80px;
  align-items: flex-end;
  text-align: right;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  min-width: 60px;
}

.stat-item.has-answers {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.2);
}

.stat-value {
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
}

.content {
  flex: 1;
}

.question-title {
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}

.question-title a {
  color: var(--accent-color);
  text-decoration: none;
}

.question-title a:hover {
  text-decoration: underline;
}

.question-excerpt {
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: rgba(79, 70, 229, 0.1);
  color: var(--accent-hover);
  padding: 0.2rem 0.6rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 600;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  justify-content: flex-end;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f1f5f9;
}

.author-name {
  color: #1a1a1a;
  font-weight: 500;
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .filters {
    flex-direction: column;
    gap: 1rem;
  }
  .search-box {
    width: 100%;
  }
  .question-card {
    flex-direction: column;
  }
  .stats {
    flex-direction: row;
    justify-content: flex-start;
  }
}
</style>
