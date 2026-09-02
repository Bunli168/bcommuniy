<template>
  <div class="code-review-container animate-fade-in">
    <div class="header-section">
      <div>
        <h1 class="page-title">Code Reviews</h1>
        <p class="text-muted">Submit your code for peer review or help others improve theirs.</p>
      </div>
      <button class="btn btn-primary">
        <svg viewBox="0 0 256 256" fill="currentColor" width="18" height="18" style="margin-right: 8px;">
          <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
        </svg>
        Request Review
      </button>
    </div>

    <div class="filters glass-panel">
      <div class="tabs">
        <button class="tab active">Needs Review</button>
        <button class="tab">My Requests</button>
        <button class="tab">Completed</button>
      </div>
      <div class="search-box">
        <input type="text" class="input-field search-input" placeholder="Search by language, framework..." />
      </div>
    </div>

    <div class="review-grid">
      <div v-for="i in 6" :key="i" class="review-card glass-panel">
        <div class="card-header">
          <div class="language-badge" :class="getLangClass(i)">
            {{ getLang(i) }}
          </div>
          <span class="status-badge" :class="i % 3 === 0 ? 'status-reviewed' : 'status-pending'">
            {{ i % 3 === 0 ? 'Reviewed' : 'Pending' }}
          </span>
        </div>
        
        <h3 class="review-title">
          <a href="#">Refactoring Vue component to use Composition API</a>
        </h3>
        
        <div class="code-preview">
          <code>
<span style="color:#c678dd">const</span> { count, increment } = <span style="color:#61afef">useCounter</span>();
<span style="color:#c678dd">const</span> doubleCount = <span style="color:#e5c07b">computed</span>(<span style="color:#c678dd">() =></span> count.value * <span style="color:#d19a66">2</span>);
          </code>
        </div>
        
        <div class="card-footer">
          <div class="meta">
            <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`" alt="avatar" class="author-avatar" />
            <span class="author-name">Alex Dev</span>
          </div>
          <button class="btn btn-secondary btn-sm">View Code</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const getLang = (i) => {
  const langs = ['Vue', 'React', 'Python', 'Go', 'Javascript', 'Rust'];
  return langs[i % langs.length];
}

const getLangClass = (i) => {
  const langs = ['lang-vue', 'lang-react', 'lang-python', 'lang-go', 'lang-js', 'lang-rust'];
  return langs[i % langs.length];
}
</script>

<style scoped>
.code-review-container {
  max-width: 1200px;
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

.review-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.review-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.language-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
}

.lang-vue { background: rgba(65, 184, 131, 0.15); color: #2c3e50; }
.lang-react { background: rgba(97, 218, 251, 0.15); color: #007bc4; }
.lang-python { background: rgba(55, 118, 171, 0.15); color: #3776ab; }
.lang-go { background: rgba(0, 173, 216, 0.15); color: #00add8; }
.lang-js { background: rgba(247, 223, 30, 0.2); color: #b5a000; }
.lang-rust { background: rgba(222, 165, 132, 0.2); color: #b86236; }

.status-badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 100px;
}

.status-pending {
  background: rgba(245, 158, 11, 0.1);
  color: #d97706;
}

.status-reviewed {
  background: rgba(16, 185, 129, 0.1);
  color: #059669;
}

.review-title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.review-title a {
  color: var(--text-primary);
  text-decoration: none;
}

.review-title a:hover {
  color: var(--accent-color);
}

.code-preview {
  background: #282c34;
  border-radius: var(--radius-sm);
  padding: 1rem;
  margin-bottom: 1.5rem;
  overflow: hidden;
  flex: 1;
}

.code-preview code {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #abb2bf;
  white-space: pre-wrap;
  display: block;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

.btn-sm {
  padding: 0.4rem 1rem;
  font-size: 0.85rem;
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f1f5f9;
}

.author-name {
  color: var(--text-secondary);
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
  .review-grid {
    grid-template-columns: 1fr;
  }
}
</style>
