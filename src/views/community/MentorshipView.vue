<template>
  <div class="mentorship-container animate-fade-in">
    <div class="header-section">
      <div>
        <h1 class="page-title">Find a Mentor</h1>
        <p class="text-muted">Connect with experienced developers for 1-on-1 guidance.</p>
      </div>
      <button class="btn btn-primary">
        Become a Mentor
      </button>
    </div>

    <div class="filters glass-panel">
      <div class="search-box">
        <input type="text" class="input-field search-input" placeholder="Search by skill, e.g., Vue.js..." />
      </div>
      <div class="filter-options">
        <select class="input-field select-field">
          <option>All Roles</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Full Stack</option>
        </select>
        <select class="input-field select-field">
          <option>Availability: Any</option>
          <option>Available Now</option>
          <option>This Week</option>
        </select>
      </div>
    </div>

    <div class="mentor-grid">
      <div v-for="i in 8" :key="i" class="mentor-card glass-panel">
        <div class="mentor-header">
          <div class="avatar-container">
            <img :src="`https://api.dicebear.com/7.x/avataaars/svg?seed=mentor${i}`" alt="Mentor avatar" class="mentor-avatar" />
            <div class="status-indicator" :class="{ 'online': i % 2 === 0 }"></div>
          </div>
          <div class="mentor-info">
            <h3 class="mentor-name">Sarah Developer {{ i }}</h3>
            <p class="mentor-role text-muted">Senior {{ i % 2 === 0 ? 'Frontend' : 'Backend' }} Engineer</p>
          </div>
        </div>
        
        <p class="mentor-bio">
          Passionate about helping juniors level up in web development. I can help with architecture, clean code, and interview prep.
        </p>
        
        <div class="skills">
          <span class="skill-tag">Vue.js</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag" v-if="i % 2 !== 0">Node.js</span>
        </div>
        
        <div class="card-footer">
          <div class="rating">
            <svg viewBox="0 0 256 256" fill="#f59e0b" width="16" height="16">
              <path d="M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51.11-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Z"></path>
            </svg>
            <span class="rating-val">4.9</span>
            <span class="review-count text-muted">(12)</span>
          </div>
          <button class="btn btn-secondary btn-sm">Request Mentoring</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mentorship-container {
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
  padding: 1.5rem;
  margin-bottom: 2rem;
  gap: 1rem;
}

.search-box {
  flex: 1;
  max-width: 400px;
}

.filter-options {
  display: flex;
  gap: 1rem;
}

.select-field {
  padding: 0.75rem 1rem;
  min-width: 150px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23475569' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px;
}

.mentor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.mentor-card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.mentor-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.avatar-container {
  position: relative;
}

.mentor-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f5f9;
  border: 2px solid white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #9ca3af;
  border: 2px solid white;
}

.status-indicator.online {
  background: #10b981;
}

.mentor-info {
  flex: 1;
}

.mentor-name {
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
}

.mentor-role {
  font-size: 0.9rem;
}

.mentor-bio {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1.2rem;
  flex: 1;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.skill-tag {
  background: rgba(15, 23, 42, 0.05);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0,0,0,0.05);
  padding-top: 1rem;
}

.rating {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.rating-val {
  font-weight: 700;
  font-size: 0.95rem;
}

.review-count {
  font-size: 0.85rem;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .filters {
    flex-direction: column;
    align-items: stretch;
  }
  .search-box {
    max-width: 100%;
  }
  .filter-options {
    flex-direction: column;
  }
}
</style>
